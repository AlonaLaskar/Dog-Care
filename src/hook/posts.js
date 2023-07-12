import useToast from './useToast';
import { uuidv4 } from '@firebase/util';
import {
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
  getDoc
} from 'firebase/firestore';
import { alertController } from '@ionic/core';

import { db, storage } from '../firebase';
import { useState } from 'react';
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';
import { ref as storageRef, deleteObject } from 'firebase/storage';

export function useAddPost() {
  const [isLoading, setLoading] = useState(false);
  const presentToast = useToast();
  async function addPost(post) {
    setLoading(true);
    const id = uuidv4();
    try {
      const postDoc = {
        ...post,
        id,
        date: Date.now(),
        likes: []
      };

      if (post.photo) {
        postDoc.photo = post.photo;
      }

      await setDoc(doc(db, 'posts', id), postDoc);
      presentToast('The post was created successfully', true);
      setLoading(false);
      return id; // return the postId
    } catch (error) {
      presentToast('Failed to create post', false);
      console.error(error);
    }
  }

  return { addPost, isLoading };
}

export function useToggleLike({ id, isLiked, uid }) {
  const [isLoading, setLoading] = useState(false);

  async function toggleLike() {
    setLoading(true);
    const docRef = doc(db, 'posts', id);
    await updateDoc(docRef, {
      likes: isLiked ? arrayRemove(uid) : arrayUnion(uid)
    });
    setLoading(false);
  }
  return { toggleLike, isLoading };
}

export function useDeletePost(id) {
  const [isLoading, setLoading] = useState(false);
  const presentToast = useToast();

  async function deletePost() {
    const showAlert = async () => {
      const alert = await alertController.create({
        header: 'Confirm Deletion',
        message: 'Are you sure you want to delete this post?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              // Do nothing if the user cancels
            }
          },
          {
            text: 'Delete',
            handler: () => {
              handleDelete();
            }
          }
        ]
      });
      await alert.present();
    };

    showAlert();
  }

  async function handleDelete() {
    setLoading(true);
    try {
      // Check if 'photo' field exists before deleting the image
      const postDoc = await getDoc(doc(db, 'posts', id));

      if (postDoc && postDoc.data().photo) {
        const fileRef = storageRef(storage, `posts/${id}`);
        await deleteObject(fileRef);
      }

      // Delete comments
      const q = query(collection(db, 'comments'), where('postId', '==', id));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (doc) => deleteDoc(doc.ref));

      // Delete post from the database
      await deleteDoc(doc(db, 'posts', id));
      presentToast('The post was deleted successfully', true);
      setLoading(false);
    } catch (error) {
      presentToast('Failed to delete post', false);
      console.error(error);
    }
  }
  return { deletePost, isLoading };
}

export function usePost(id) {
  const q = doc(db, 'posts', id);
  const [post, isLoading] = useDocumentData(q);
  return { post, isLoading };
}

export function usePosts(uid = null) {
  const q = uid
    ? query(collection(db, 'posts'), orderBy('date', 'desc'), where('uid', '==', uid))
    : query(collection(db, 'posts'), orderBy('date', 'desc'));
  const [posts, isLoading, error] = useCollectionData(q);
  if (error) throw error;
  return { posts, isLoading };
}
