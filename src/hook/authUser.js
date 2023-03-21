import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import { useEffect, useState } from 'react';
import { setDoc, doc, getDoc, addDoc, collection } from 'firebase/firestore';
import { isEmailExists } from './isEmailExists';
// import { toast } from 'toast/toast';
import { useIonToast } from '@ionic/react';
export function useAuth() {
  const [authUser, authLoading, error] = useAuthState(auth);
  const [isLoading, setLoading] = useState(true);

  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const ref = doc(db, 'users', authUser.uid);
      const docSnap = await getDoc(ref);
      setUser(docSnap.data());
      setLoading(false);
    }

    if (!authLoading) {
      if (authUser) fetchData();
      else setLoading(false); // Not signed in
    }
  }, [authLoading]);

  return { user, isLoading, error };
}

export function useLogin() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [presentToast]= useIonToast();

  async function login({ email, password }) {
    setLoading(false);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(true);
      presentToast('התחברת בהצלחה', 2000);
      console.log('login');
    } catch (error) {
     presentToast('התחברות נכשלה', 2000);
      setError(error);
      setLoading(false);
      console.log('errrr', error);
    }
  }
  return {login,isLoading, error };
}



export function useRegister() {
  const [isLoading, setLoading] = useState(false);
  const [presentToast]= useIonToast();

  async function register({ email, password, firstName, lastName, phone, address, city, birthDate }) {
    setLoading(true);
  
    const emailExists = await isEmailExists(email);
    if (emailExists) {
     presentToast('המייל כבר קיים במערכת', 2000);
      setLoading(false);
    } else {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        try {
          const docRef = await addDoc(collection(db, 'users'), {
            userId: res.user.uid, // add the user's uid to the document
            email: email,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            address: address,
            city: city,
            birthDate: birthDate
          });
          console.log('auth attempt', res.id, res.user.email);
          console.log('Document written with ID: ', docRef.id);
        } catch (e) {
          console.error('Error adding document: ', e);
          presentToast('הרשמתך נכשלה', 2000);
        } finally {
          setLoading(false);
        }
        presentToast('הרשמתך בוצעה בהצלחה', 2000); 
        setLoading(true);
      } catch (error) {
        console.log('errrr', error);
        presentToast('הרשמתך נכשלה', 2000);
        setLoading(false);
      }
    }
  }

  return { register, isLoading };
}

// export function useLogout() {
//   const [signOut, isLoading, error] = useSignOut(auth);
//   async function logout() {
//     if (await signOut()) {

//     }
//   }
//   return { logout, isLoading };
// }
