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
import { IonLoading, IonButton, IonIcon } from '@ionic/react';
import { personAdd } from 'ionicons/icons';

//! Providers
import AuthContext from 'providers/AuthContext';
import FormContext from 'providers/FormContext';

//! Components
import Input from 'components/UI/Input';
import StyledRegister from './StyledRegister';

//! Yup schema for validation
const schema = yup.object().shape({
  email: yup.string().email().required('הכנס כתובת מייל תקינה'),
  password: yup.string(),
  //.min(6).max(15).lowercase ().uppercase().required('הסיסמא חייבת להכיל לפחות 6 תווים וחייב שימוש באות גדולה וקטנה'),
  verifyPassword: yup.string().oneOf([yup.ref('password'), null], 'הסיסמאות לא תואמות'),
  firstName: yup.string().required('שדה חובה'),
  lastName: yup.string().required('שדה חובה'),
  phone: yup.string().required('אנא הכנס מספר טלפון'),
  address: yup.string().required('הזן רחוב ומספר בית'),
  birthDate: yup.string()
});

export default function Register() {
  //! Init states
  const [isLoading, setIsLoading] = useState(false);
  const { loggedIn } = useContext(AuthContext);
  const present = useToast();
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
    console.log('handleRegister');

    setIsLoading(true);

    try {
      //! Check if email is already exists
      const emailExists = await isEmailExists(email);
      if (emailExists) {
        present('The email is already in use', false);
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
        email,
        avatar: '',
        date: Date.now(),
        ...rest
      });

      present('Registration successfully', true);
      pushToHome();
    } catch (error) {
      present(`Registration failed: ${error?.message.split('/')[1].split(')')[0]}`, false);
    }

    setIsLoading(false);
  };

  return (
    <StyledRegister>
      <div className="form">
        <h1 className="form-title">Registration Form</h1>

        <FormContext.Provider value={{ errors, register }}>
          <form onSubmit={handleSubmit(handleRegister)}>
            <Input id="email" title="כתובת מייל" placeholder="הכנס כתובת מייל" position="floating" />
            <Input id="password" title="סיסמא" placeholder="הכנס סיסמא" position="floating" />
            <Input id="verifyPassword" type="password" title="Verify password" position="floating" />
            <Input id="firstName" title="שם פרטי" placeholder="הכנס שם פרטי" position="floating" />
            <Input id="lastName" title="שם משפחה" placeholder="הכנס שם משפחה" position="floating" />
            <Input id="phone" title="טלפון" placeholder="הכנס מספר טלפון" position="floating" />
            <Input id="address" title="כתובת" placeholder="הכנס כתובת" position="floating" />
            <Input id="birthDate" type="date" title="תאריך לידה" placeholder="הכנס תאריך לידה" position="floating" />

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
