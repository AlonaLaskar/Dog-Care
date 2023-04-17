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

//! Custom hooks
import useToast from 'hook/useToast';
import { isEmailExists } from 'hook/isEmailExists';

//! Ionic components
import { IonLoading, IonButton, IonIcon, IonTextarea } from '@ionic/react';
import { personAdd } from 'ionicons/icons';

//! Providers
import AuthContext from 'providers/AuthContext';
import FormContext from 'providers/FormContext';

//! Components
import Input from 'components/UI/Input';
import StyledRegister from './StyledRegister';

//! Yup schema for validation
const schema = yup.object().shape({
  email: yup.string().email().required('The email is required'),
  password: yup
    .string()
    .min(6)
    .max(15)
    .lowercase()
    .uppercase()
    .required('The password is required,6-15 characters,lowercase,uppercase'),
  verifyPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords dont match'),
  fullName: yup.string().required('Enter full name'),
  phone: yup.string().required('Enter phone number'),
  address: yup.string().required('Enter address'),
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
  const handleRegister = async ({ email, password, ...rest }) => {
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
      const { user } = (await createUserWithEmailAndPassword(auth, email, password)) || {};
      const { uid: id } = user || {};

      //! Set user data in firestore
      await setDoc(doc(db, 'users', id), {
        id,
        username: email.split('@')[0],
        aboutMe: ' ',
        email,
        avatar:
          'https://firebasestorage.googleapis.com/v0/b/dogsitter-58dc1.appspot.com/o/pictures%2F5cb8543b-f398-4b1e-a127-dc04a01753ae.jfif?alt=media&token=745c7c51-4483-4ae4-85e0-7a9462b9ea7a',
        ...rest
      });
      presentToast('Registration successfully', true);
      pushToHome();
    } catch (error) {
      presentToast(`Registration failed: ${error?.message.split('/')[1].split(')')[0]}`, false);
    }
    setIsLoading(false);
  };

  return (
    <StyledRegister>
      <div className="form">
        <h1 className="form-title">Registration Form</h1>

        <FormContext.Provider value={{ errors, register }}>
          <form onSubmit={handleSubmit(handleRegister)}>
            <Input id="email" title="email address " placeholder="Enter email address" position="floating" />
            <Input id="password" title="password" placeholder="Enter password" position="floating" />
            <Input id="verifyPassword" type="verify-Password" title="Verify password" position="floating" />
            <Input id="fullName" title="fullName" placeholder="Enter fullName" position="floating" />
            <Input id="phone" title="cellphone" placeholder="Enter phone number" position="floating" />
            <Input id="address" title="address" placeholder="Enter address" position="floating" />
            <Input id="birthDate" type="date" title="Birthday" placeholder="Enter birthday" position="floating" />
            <Input id="aboutMe" title="About me" placeholder="Enter about me" position="floating" />

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
      </div>

      <IonLoading isOpen={isLoading} message={'Loading...'} />
    </StyledRegister>
  );
}
