import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import { useEffect, useState } from 'react';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { isEmailExists } from './isEmailExists';
import useToast from './useToast';

import { IonRedirect } from '@ionic/react';

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
  const [present] = useToast();

  async function login({ email, password }) {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      present('Logged in successfully', true);
      console.log('login');
    } catch (error) {
      present('Login failed', false);
      setError(error);
      setLoading(false);
      console.log('errrr', error);
    } finally {
      setLoading(false);
    }
  }
  return { login, isLoading, error };
}

export function useRegister() {
  const [isLoading, setLoading] = useState(false);
  const [present] = useToast();
  async function register({ email, password, firstName, lastName, phone, address, city, birthDate }) {
    setLoading(true);

    const emailExists = await isEmailExists(email);
    if (emailExists) {
      present('The email is already in use', false);
      setLoading(false);
    } else {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        try {
          const emailParts = email.split('@');
          const docRef = await setDoc(doc(db, 'users', res.user.uid), {
            id: res.user.uid,
            username: emailParts[0],
            email: email,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            address: address,
            city: city,
            birthDate: birthDate,
            avatar: '',
            date: Date.now()
          });
        } catch (e) {
          console.error('Error adding document: ', e);
          present('Registration failed', false);
        }
        present('Registration successful', true);
      } finally {
        setLoading(false);
      }
    }
  }

  return { register, isLoading };
}

export function useLogout() {
  const [signOut, isLoading, error] = useSignOut(auth);
  const [present] = useToast();
  async function logout() {
    if (await signOut()) {
      present('You have been logged out', true);
      <IonRedirect to="/login" />;
    } else {
      present('Logout failed', false);
    }
  }
  return { logout, isLoading };
}
