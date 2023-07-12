import { db} from '../firebase';
import {  doc, query, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import {  useDocumentData } from 'react-firebase-hooks/firestore';
import { arrayRemove, arrayUnion } from 'firebase/firestore';
import { getDoc} from 'firebase/firestore';

export function useUser(id) {
  const q = query(doc(db, 'users', id));
  const [user, isLoading] = useDocumentData(q);
  return { user, isLoading };
}

export function useYouLike({ id, isLiked, uid }) {
  const [isLoading, setLoading] = useState(false);

  async function YouLike() {
    setLoading(true);
    const docRef = doc(db, 'users', id);
    await updateDoc(docRef, {
      likes: isLiked ? arrayRemove(uid) : arrayUnion(uid)
    });
    setLoading(false);
  }
  return { YouLike, isLoading };
}

//////////////!! chenge in the all code
export async function getUser(id) {
  const docRef = doc(db, 'users', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log('No  such users document!');
    return null;
  }
}

export async function getUserData(availabilityId,userId1,setUserData) {
  const availabilityRef = doc(db, 'availability', availabilityId);
  const availabilitySnapshot = await getDoc(availabilityRef);
  if (availabilitySnapshot.exists()) {
    const userRef = doc(db, 'users', userId1);
    const userSnapshot = await getDoc(userRef);
    if (userSnapshot.exists()) {
      const userData = userSnapshot.data();
      setUserData(userData);
    } else {
      console.log('User document does not exist');
    }
  } else {
    console.log('Availability document does not exist');
  }
}


