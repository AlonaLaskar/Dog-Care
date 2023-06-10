
import { db } from '../../../firebase';
import { useContext } from 'react';
import AuthContext from 'providers/AuthContext';
import { doc, updateDoc } from 'firebase/firestore';


 function UnUserMode  ()  {
  const { userId } = useContext(AuthContext) || {};
  const userRef = doc(db, 'users', userId);

   updateDoc(userRef, {

  });
  return ;
}


export default UnUserMode;
