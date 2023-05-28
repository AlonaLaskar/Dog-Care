//! Packages
import { useState, useContext,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
//! Firebase
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { auth } from 'firebase.js';
//! Ionic components
import { IonLoading, IonButton, IonIcon, IonAlert  } from '@ionic/react';
import { personCircle} from 'ionicons/icons';
//! Custom hooks
import useToast from 'hook/useToast';
//! Providers
import FormContext from 'providers/FormContext';
//! Components
import Input from 'components/UI/Input';
import StyledLogin from './StyledLogin';
import AuthContext from 'providers/AuthContext';
//!
import boneLogo from '../../assets/boneLogo.png';
import dogLogo from '../../assets/dogLogo.png';

function Login() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  console.log('alertMessage', alertMessage);
  console.log('showAlert0', showAlert);

  const history = useHistory();
  const { loggedIn } = useContext(AuthContext);
  const presentToast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  //handele login
  const handleLogin = async (data) => {
    console.log('data', data);
    if (!data.email ||( !data.password|| data.password.length <5)) {
      setAlertMessage('Please enter  email and password,password must be more than 6');
      setShowAlert(true);
      return;
    }

    if (data.email.length > 30 || data.password.length > 30) {
      setAlertMessage('Email and password must be less than 30 characters long.');
      setShowAlert(true);
      return;
    }
    setIsLoading(true);
    try {
      //create user
      await signInWithEmailAndPassword(auth, data?.email, data?.password);
      presentToast('Logged in successfully', true);
    } catch (error) {
      presentToast(`Login failed: ${error?.message.split('/')[1].split(')')[0]}`, false);
    }
    setIsLoading(false);
  };

  const loginWithHandler = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
      presentToast('Logged in successfully', true);
    } catch (error) {
      presentToast(`Login failed: ${error?.message.split('/')[1].split(')')[0]}`, false);
    }
  };

  useEffect(() => {
    if (loggedIn) {
      history.push('/my/home');
    }
  }, [loggedIn, history]);

  const [isLoading, setIsLoading] = useState(false);

  return (
    <StyledLogin>
      <div className="contener">
        <div className="boneLogo">
          <img src={boneLogo} alt="logo" />
        </div>
        <div className="dogLogo">
          <img src={dogLogo} alt="logo" />
        </div>
        <FormContext.Provider value={{ errors, register }}>
          <div className="form">
            <form onSubmit={handleSubmit(handleLogin)}>
              <Input id="email" title="Email" />
              <Input id="password" title="Password" />

              <div className="register">
                <IonButton routerLink="./register" expand="block" fill="clear" color="dark">
                  Still not registered? Sign up here
                </IonButton>
              </div>

              <div className="forgetPassword">
                <IonButton routerLink="./ForgetPassword" fill="clear" color="dark">
                  Forget password?
                </IonButton>
              </div>

              <div className="form-buttons">
                <IonButton type="submit" expand="block" fill="clear" color="light">
                  <IonIcon slot="start" icon={personCircle} color="light" />
                  Login
                </IonButton>
              </div>
            </form>
          </div>
        </FormContext.Provider>

        <IonAlert
          isOpen={showAlert}
          header="Alert"
          subHeader="Important message"
          message={alertMessage}
          buttons={['OK']}
          onDidDismiss={() => setShowAlert(false)}
        />

        <IonLoading isOpen={isLoading} message={'loading...'} />
      </div>
    </StyledLogin>
  );
}

export default Login;
