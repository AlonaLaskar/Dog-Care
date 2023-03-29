import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { auth as firebaseAuth } from '../firebase';
import AuthContext from 'providers/AuthContext';

export function useAuthInit() {
  const [authInit, setAuthInit] = useState({ loading: true });
  useEffect(() => {
    return firebaseAuth.onAuthStateChanged((firebaseUser) => {
      const auth = firebaseUser ? { loggedIn: true, userId: firebaseUser.uid } : { loggedIn: false };
      setAuthInit({ loading: false, auth });
    });
  }, []);
  return authInit;
}

export function _useAuthInit(setter) {
  firebaseAuth.onAuthStateChanged((firebaseUser) => {
    const auth = firebaseUser ? { loggedIn: true, userId: firebaseUser.uid } : { loggedIn: false };
    setter((prev) => ({ ...prev, loading: false, ...auth }));
  });
}
