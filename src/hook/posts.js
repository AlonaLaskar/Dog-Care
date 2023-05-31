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
  where
} from 'firebase/firestore';

import { db } from '../firebase';
import { useState } from 'react';
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';

export function useAddPost() {
  const [isLoading, setLoading] = useState(false);
  const presentToast = useToast();

  async function addPost(post) {
    setLoading(true);
    const id = uuidv4();
    try {
      await setDoc(doc(db, 'posts', id), {
        ...post,
        id,
        date: Date.now(),
        likes: []
      });
      presentToast('The post was created successfully', true);
      setLoading(false);
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
    const res = window.confirm('Are you sure you want to delete this post?');
    if (res) {
      setLoading(true);
      //delete post
      await deleteDoc(doc(db, 'posts', id));
      //delete comments
      const q = query(collection(db, 'comments'), where('postId', '==', id));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (doc) => deleteDoc(doc.ref));
      presentToast('The post was deleted successfully', true);
      setLoading(false);
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
