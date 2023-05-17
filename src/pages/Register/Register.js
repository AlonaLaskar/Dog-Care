//! Packages
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

//! Firebase
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from 'firebase.js';

//! Form packages
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { format } from 'date-fns';

//! Custom hooks
import useToast from 'hook/useToast';
import { isEmailExists } from 'hook/isEmailExists';

//! Ionic components
import { IonLoading, IonButton, IonIcon, IonTitle, IonCard, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import { personAdd } from 'ionicons/icons';

//! Providers
import AuthContext from 'providers/AuthContext';
import FormContext from 'providers/FormContext';

//! Components
import Input from 'components/UI/Input';
import StyledRegister from './StyledRegister';
import boneLogo from '../../assets/boneLogo.png';
import dogLogo from '../../assets/dogLogo.png';

//! Yup schema for validation
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string(),
  // verifyPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords dont match'),
  fullName: yup.string().required(),
  tel: yup.string().required(),
  address: yup.string().required(),
  birthDate: yup.string(),
  aboutMe: yup.string()
});

export default function Register() {
  //! Init states
  const [isLoading, setIsLoading] = useState(false);
  const { loggedIn } = useContext(AuthContext);
  const presentToast = useToast();
  const history = useHistory();

  //! Init forms
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  //! Check if user is logged in
  const pushToHome = () => history.push({ pathname: '/my/home' });
  if (loggedIn) return pushToHome();

  //! Handle register with credentials and profile data
  const handleRegister = async ({ email, password, birthDate, address, ...rest }) => {
    console.log('rest', { email, password, birthDate, address, ...rest });

    setIsLoading(true);

    try {
      //! Check if email is already exists
      const emailExists = await isEmailExists(email);
      if (emailExists) {
        presentToast('The email is already in use', false);
        setIsLoading(false);
        return;
      }

      //! Create user with email and password
      try {
        const { user } = (await createUserWithEmailAndPassword(auth, email ?? '', password)) || {};
        const { uid: id } = user || {};
        await setDoc(doc(db, 'users', id), {
          id,
          username: email.split('@')[0],
          aboutMe: ' ',
          birthDate: format(new Date(birthDate), 'dd/MM/yyyy'),
          email,
          address,
          avatar:
            'https://firebasestorage.googleapis.com/v0/b/dogsitter-58dc1.appspot.com/o/pictures%2F5cb8543b-f398-4b1e-a127-dc04a01753ae.jfif?alt=media&token=745c7c51-4483-4ae4-85e0-7a9462b9ea7a',
          ...rest
        });
        presentToast('Registration successfully', true);
        pushToHome();
      } catch (error) {
        console.error(error);
      }

      //! Set user data in firestore
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <StyledRegister>
      <div className="logo">
        <div className="boneLogo">
          <img src={boneLogo} alt="logo" />
        </div>
      </div>

      <IonCard>
        <IonCardTitle>Join us!</IonCardTitle>
        <div className="subtitle">
          <span>
            Welcome to our dog care app, the perfect solution for busy pet owners who want to ensure their furry friends
            get the exercise they need or are looked after while you are away from home.
          </span>
        </div>

        <FormContext.Provider value={{ errors, register }}>
          <form onSubmit={handleSubmit(handleRegister)}>
            <Input id="email" title="Email address " placeholder="Enter email address" />
            <Input id="password" title="Password" placeholder="Enter password" type="password" />
            <Input id="verifyPassword" title="Verify password" type="password" placeholder="Enter verify password" />
            <Input id="fullName" title="Full Name" placeholder="Enter fullName" />
            <Input id="tel" title="Phone Number" type="tel" placeholder="Enter phone number" />
            <Input id="address" title="address" placeholder="Enter address" isInput={true} />
            <Input id="birthDate" title="Birthday" type="date" placeholder="Enter birthday" />
            <Input id="aboutMe" title="About me" placeholder="Enter about me" />

            <div className="form-group">
              <IonButton type="submit" expand="block">
                <IonIcon slot="start" icon={personAdd} />
                <span>Register</span>
              </IonButton>
              <p>
                <span>Got an account? </span>
                <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </FormContext.Provider>
      </IonCard>

      <IonLoading isOpen={isLoading} message={'Loading...'} />
    </StyledRegister>
  );
}
