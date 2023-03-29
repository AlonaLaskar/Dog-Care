import { useForm } from 'react-hook-form';
import { IonButton, IonIcon } from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { logoFacebook, logoGoogle, personAdd } from 'ionicons/icons';
import { useLogin } from 'hook/authUser';
import { auth, googleProvider, facebookProvider } from '../../firebase';
import {  signInWithPopup } from 'firebase/auth';
import StyledLogin from './StyledLogin';
import { useState } from 'react';
import { emailValidate, passwordValidate } from 'hook/form-validate';
import { userAuthContext } from '../auth/authContext';
import { IonLoading } from '@ionic/react';
import { Redirect } from 'react-router-dom';


  function Login() {
  const { login, isLoading ,error} = useLogin();
  const { loggedIn } = userAuthContext();
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleLogin = async (data) => {
     login({
      email: data.email,
      password: data.password
      
    });
    
  };
  
  const loginWhithGoogleHandler = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      setErrorMessage(error.message);
      console.log(error);
    }
  
  };

  const loginWhithFacebookHandler = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
    } catch (error) {
      setErrorMessage(error.message);
      console.log(error);
    }
  };

  if (loggedIn) {
    return <Redirect to="/my/home" />;
  }
  return (
    <StyledLogin>
      <div className="form">
        <h1>התחברות</h1>
        <form onSubmit={handleSubmit(handleLogin)}>

          <div className="form-group">
            <label htmlFor="email">אימייל</label>
            <input id="email" type="email" placeholder="אנא הזן אימייל" {...register('email', emailValidate)} />
            {errors.email && <div className="error">{errors.email.message}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="password">סיסמא</label>
            <input type="password" placeholder="אנא הזן סיסמא" {...register('password', passwordValidate)} />
            {errors.password && <div className="error">{errors.password.message}</div>}
          </div>

          <div className="form-buttons">
            <IonButton type="submit" expand="block" fill="solid">
              <IonIcon slot="start" icon={personCircle}></IonIcon>
              התחברות
            </IonButton>

            <IonLoading isOpen={isLoading} message={'טוען...'} />

            <IonButton routerLink="/register" expand="block" fill="clear">
              <IonIcon slot="start" icon={personAdd} />
              הרשמה
            </IonButton>
          </div>
          {errorMessage && <div className="errorUser">{'אנא הזן ערכים נכונים'}</div>}
        </form>

          <h3>או באמצעות</h3>
          <div className="social">
            <IonButton expand="fill"color="none"id="google"className="social-button"onClick={loginWhithGoogleHandler} >
              <IonIcon slot="start" icon={logoGoogle}/> התחברות עם גוגל</IonButton>  <IonButton expand="fill" color="none"id="facebook" className="social-button" onClick={loginWhithFacebookHandler}>
              <IonIcon slot="start" icon={logoFacebook} /> התחברות עם פייסבוק
            </IonButton>
          </div>
        </div>
    </StyledLogin>
  );
}
export default Login;

