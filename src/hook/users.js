import { db, storage } from '../firebase';
import { collection, doc, query, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useState } from 'react';
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';
import useToast from './useToast';

export function useUser(id) {
  const q = query(doc(db, 'users', id));
  const [user, isLoading] = useDocumentData(q);
  return { user, isLoading };
}

export function useUsers() {
  const [users, isLoading] = useCollectionData(collection(db, 'users'));
  return { users, isLoading };
}
export function useUpdateAvatar(uid) {
  const [isLoading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const presentToast = useToast();


  async function updateAvatar() {
    if (!file) {
      presentToast('Not found a file', false);
      return;
    }
    setLoading(true);

    const fileRef = ref(storage, 'avatars/' + uid);
    await uploadBytes(fileRef, file);

    const avatarURL = await getDownloadURL(fileRef);
    const docRef = doc(db, 'users', uid);
    await updateDoc(docRef, { avatar: avatarURL });
    presentToast('The photo update successfully', true);

    setLoading(false);
    //navigetion
  }
  return {
    setFile,
    updateAvatar,
    isLoading,
    fileUrl: file && URL.createObjectURL(file)
  };
}
