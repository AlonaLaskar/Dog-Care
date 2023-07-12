import { uuidv4 } from '@firebase/util';
import useToast from './useToast';
import { collection, deleteDoc, doc, orderBy, query, setDoc, where } from 'firebase/firestore';
import { db } from '../firebase';
import { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { alertController } from '@ionic/core';


export function useAddComment({ postID, uid }) {
  const [isLoading, setLoading] = useState(false);
  const presentToast = useToast();

  async function addComment(text) {
    if (text === '') return;
    setLoading(true);
    const id = uuidv4();
    const date = Date.now();
    const docRef = doc(db, 'comments', id);
    await setDoc(docRef, { text, id, postID, date, uid });
    presentToast('The response was sent successfully ', true);
    setLoading(false);
  }

  return { addComment, isLoading };
}

export function useComments(postID) {
  const q = query(collection(db, 'comments'), where('postID', '==', postID), orderBy('date', 'asc'));
  const [comments, isLoading, error] = useCollectionData(q);
  if (error) throw error;

  return { comments, isLoading };
}


export function useDeleteComment(id) {
  const [isLoading, setLoading] = useState(false);
  const presentToast = useToast();

  async function deleteComment() {
    const showAlert = async () => {
      const alert = await alertController.create({
        header: 'Confirm Deletion',
        message: 'Are you sure you want to delete this comment?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              // Do nothing if the user cancels
            },
          },
          {
            text: 'Delete',
            handler: () => {
              handleDelete();
            },
          },
        ],
      });
      await alert.present();
    };

    showAlert();
  }

  async function handleDelete() {
    setLoading(true);
    try {
      const docRef = doc(db, 'comments', id);
      await deleteDoc(docRef);
      presentToast('The comment was successfully deleted', 'success');
    } catch (error) {
      console.error('Error deleting comment:', error);
      presentToast('An error occurred while deleting the comment', 'error');
    } finally {
      setLoading(false);
    }
  }

  return { deleteComment, isLoading };
}
