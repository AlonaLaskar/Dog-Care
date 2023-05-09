import { uuidv4 } from '@firebase/util';
import useToast from './useToast';
import { collection, deleteDoc, doc, orderBy, query, setDoc, where } from 'firebase/firestore';
import { db } from '../firebase';
import { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

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
    const res = window.confirm('Would you like to delete this comment?');

    if (res) {
      setLoading(true);
      const docRef = doc(db, 'comments', id);
      await deleteDoc(docRef);
      presentToast('The comment was successfully deleted ', 'success');
      setLoading(false);
    }
  }

  return { deleteComment, isLoading };
}
