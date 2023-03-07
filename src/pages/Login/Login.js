import React, { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton } from '@ionic/react';

import { auth, googleProvider, facebookProvider } from '../../firebase';
import StyledLogin from './StyledLogin';

const Login = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleEmailLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await auth.signInWithPopup(googleProvider);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await auth.signInWithPopup(facebookProvider);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleForgotPassword = async () => {
    try {
      await auth.sendPasswordResetEmail(email);
      alert('Password reset email sent!');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <StyledLogin>
    <IonPage>
      <IonContent>
        <h1>Login</h1>
        <IonInput
          type="email"
          placeholder="Email"
          value={email}
          onIonChange={(e) => setEmail(e.target.value)}
        />
        <IonInput
          type="password"
          placeholder="Password"
          value={password}
          onIonChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="error">{error}</div>}
        <IonButton onClick={handleEmailLogin}>Login</IonButton>
        <IonButton onClick={handleGoogleLogin}>Google Login</IonButton>
        <IonButton onClick={handleFacebookLogin}>Facebook Login</IonButton>
        <IonButton onClick={handleForgotPassword}>Forgot Password</IonButton>
        <IonButton routerLink="/signup">Create Account</IonButton>
      </IonContent>
    </IonPage>
    </StyledLogin>
  );
};


export default Login;
