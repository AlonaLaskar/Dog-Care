
import {db,storage} from '../firebase';
import { collection, doc, query, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useState } from 'react';
import { useCollectionData,useDocumentData } from 'react-firebase-hooks/firestore';
import useToast from '../config/useToast';

export function useUser(id){
    const q=query(doc(db,'users',id));
    const[user,isLoading]=useDocumentData(q);
    return {user,isLoading};

}
export function useUsers(){
    const [user,isLoading]=useCollectionData(collection(db,'users'));
    return {user,isLoading};
}
export function useUpdateAvatar(uid) {
    const[isLoading,setLoading]=useState(false);
    const [file, setFile] = useState(null);
    const [present] = useToast();


async function updateAvatar(){
    if(!file){
        present('לא נבחר קובץ',false );
        return;
        }
        setLoading(true);

const fileRef=ref(storage,'avatars/'+uid);
await uploadBytes(fileRef, file);

const avatarURL = await getDownloadURL(fileRef);
const docRef=doc(db,'users',uid);
await updateDoc(docRef,{avatar:avatarURL});
present('התמונה עודכנה בהצלחה',true);
setLoading(false);
//navigetion
}
return{
    setFile,
    updateAvatar,
    isLoading,
    fileUrl:file&&URL.createObjectURL(file),
};
}



