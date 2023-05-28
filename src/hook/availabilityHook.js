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

import { format } from 'date-fns';

import { db } from '../firebase';
import { useState } from 'react';
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';
import { useContext } from 'react';
import AuthContext from 'providers/AuthContext';
import { useHistory } from 'react-router-dom';
import SendRequestMassage from '../components/Schedule/DogSitterService/SendRequestMassage';



export function useAddAvailability() {
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);
  const presentToast = useToast();

  async function addAvailability(availability) {

    setLoading(true);
    const id = uuidv4();
    try {
      await setDoc(doc(db, 'availability', id), {
        // dateStart: formattedDateStart,
        // dateStop: formattedDateStop,
        ...availability,
        availabilityId: id,
        date: Date.now(),
      });
      presentToast('The availability was created successfully', true);
      setLoading(false);
      SendRequestMassage(id);
    } catch (error) {
      presentToast('Failed to create availability', false);
      console.error(error);
    }
  }  
  return { addAvailability, isLoading };
}


export function useDeleteAvailability(id) {
  const [isLoading, setLoading] = useState(false);
  const presentToast = useToast();

  async function deleteAvailability() {
    const res = window.confirm('Are you sure you want to delete this availability?');
    if (res) {
      setLoading(true);
      //delete post
      await deleteDoc(doc(db, 'availability', id));
      //delete comments
      // const q = query(collection(db, 'comments'), where('postId', '==', id));
      // const querySnapshot = await getDocs(q);
      // querySnapshot.forEach(async (doc) => deleteDoc(doc.ref));
      presentToast('The availability was deleted successfully', true);
      setLoading(false);
    }
  }
  return { deleteAvailability, isLoading };
}

export function useavAilability(id) {
  const q = doc(db, 'availability', id);
  const [availability, isLoading] = useDocumentData(q);
  console.log("availabilityISHOOK",availability);
  return { availability, isLoading };
}

export function useavAilabilitys(uid = null) {

  const { userId } = useContext(AuthContext) || {};
  const q = uid
    ? query(collection(db, 'availability'), orderBy('date', 'desc'), where('availabilityId', '==', uid))
    : query(collection(db, 'availability'), orderBy('date', 'desc'));
  const [availabilitys, isLoading, error] = useCollectionData(q);
  if (error) throw error;
  return { availabilitys, isLoading };
}
