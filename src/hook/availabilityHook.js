import useToast from './useToast';
import { uuidv4 } from '@firebase/util';
import { doc, setDoc, updateDoc, deleteDoc,  collection, query, where, getDoc,getDocs, orderBy } from 'firebase/firestore';

import { db } from '../firebase';
import { useState } from 'react';
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';
import SendRequestMassage from '../components/Schedule/DogSitterService/SendRequestMassage';



export function useAddAvailability() {
  const [isLoading, setLoading] = useState(false);
  const presentToast = useToast();

  async function addAvailability(availability) {

    setLoading(true);
    const id = uuidv4();
    try {
      await setDoc(doc(db, 'availability', id), {
 
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
      //delete deleteDoc
      await deleteDoc(doc(db, 'availability', id));
      await deleteDoc(doc(db, 'swipes', id));
    
      presentToast('The availability was deleted successfully', true);
      setLoading(false);
    }
  }
  return { deleteAvailability, isLoading };
}


export function useavAilability(id) {
  const q = doc(db, 'availability', id);
  const [availability, isLoading] = useDocumentData(q);
  return { availability, isLoading };
}

export function useavAilabilitys(uid = null) {

  const q = uid
    ? query(collection(db, 'availability'), orderBy('date', 'desc'), where('availabilityId', '==', uid))
    : query(collection(db, 'availability'), orderBy('date', 'desc'));
  const [availabilitys, isLoading, error] = useCollectionData(q);
  if (error) throw error;
  return { availabilitys, isLoading };
}

export async function useAvilabiltys() {
  const usersRef = collection(db, 'availability');
  const snapshot = await getDocs(usersRef);
  const avilabiltyList = snapshot.docs.map(doc => doc.data());
  console.log('avilabiltyList in hoookkkkkkkkk', avilabiltyList);
  return avilabiltyList;
}




export function useEditAvailability(id) {
  const [isLoading, setLoading] = useState(false);
  const presentToast = useToast();

  async function editAvailability(availability) {
    setLoading(true);
    try {
      await updateDoc(doc(db, 'availability', id), {
        ...availability,
      });
      presentToast('The availability was updated successfully', true);
      setLoading(false);
    } catch (error) {
      presentToast('Failed to update availability', false);
      console.error(error);
    }
  }

  return { editAvailability, isLoading };
}


//!!!!!
export async function getAvailability(id) {
  const docRef = doc(db, 'availability', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such  availability document!");
    return null;
  }
}