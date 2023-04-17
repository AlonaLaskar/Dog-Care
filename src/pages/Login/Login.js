//! Packages
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

//! Firebase
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { auth, db, googleProvider, facebookProvider } from 'firebase.js';

//! Ionic components
import { IonLoading, IonButton, IonIcon, } from '@ionic/react';
import { personCircle, logoFacebook, logoGoogle, personAdd } from 'ionicons/icons';

//! Custom hooks
import useToast from 'hook/useToast';
import { emailValidate, passwordValidate } from 'hook/form-validate';

//! Providers
import FormContext from 'providers/FormContext';

//! Components
import Input from 'components/UI/Input';
import StyledLogin from './StyledLogin';
import { Redirect } from 'react-router-dom';
import AuthContext from 'providers/AuthContext';



function Login( ) {
  const { loggedIn } = useContext(AuthContext);
if (loggedIn) {
    console.log("im logged in");
    return <Redirect to="/my/home"/>;
  }

  const [isLoading, setIsLoading] = useState(false);
  const presentToast = useToast();

  //! Init forms
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  //! Handle login with email and password
  const handleLogin = async (data) => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, data?.email, data?.password);
      presentToast('Logged in successfully', true);
    } catch (error) {
      presentToast(`Login failed: ${error?.message.split('/')[1].split(')')[0]}`, false);
    }

    setIsLoading(false);
  };

  //! Handle login with google account or facebook account
  const loginWithHandler = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
      presentToast('Logged in successfully', true);
    } catch (error) {
      presentToast(`Login failed: ${error?.message.split('/')[1].split(')')[0]}`, false);
    }
  };

  return (
    <StyledLogin>
      <FormContext.Provider value={{ errors, register }}>
        <div className="form">
          <h1 className="form-title">Log In</h1>
          <form onSubmit={handleSubmit(handleLogin)}>
            <Input id="email" title="Email" placeholder="Type your email..." validateHandler={emailValidate} />

            <Input
              id="password"
              title="Password"
              placeholder="Type your password..."
              validateHandler={passwordValidate}
            />

            <div className="form-buttons">
              <IonButton type="submit" expand="block" fill="solid" >
                <IonIcon slot="start" icon={personCircle} />
                התחברות
              </IonButton>

              <IonButton routerLink="/register" expand="block" fill="clear">
                <IonIcon slot="start" icon={personAdd} />
                הרשמה
              </IonButton>
            </div>
          </form>

          <h3 className="social-title">- or with -</h3>
          <div className="social">
            <IonButton
              expand="fill"
              color="none"
              id="google"
              className="social-button"
              onClick={() => loginWithHandler(googleProvider)}
            >
              <IonIcon slot="start" icon={logoGoogle} />
              <span>Login With Google</span>
            </IonButton>
            <IonButton
              expand="fill"
              color="none"
              id="facebook"
              className="social-button"
              onClick={() => loginWithHandler(facebookProvider)}
            >
              <IonIcon slot="start" icon={logoFacebook} />
              <span>Login With Facebook</span>
            </IonButton>
          </div>
        </div>
      </FormContext.Provider>

      <IonLoading isOpen={isLoading} message={'loading...'} />
    </StyledLogin>
  );
}
export default Login;
