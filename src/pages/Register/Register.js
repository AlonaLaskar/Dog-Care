import StyledRegister from './StyledRegister';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { IonItem, IonLabel, IonInput, IonNote, IonLoading } from '@ionic/react';
import { IonButton, IonIcon, IonSpinner } from '@ionic/react';
import { personAdd } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { useRegister } from 'hook/authUser';
import { userAuthContext } from '../../auth';
import { Redirect } from 'react-router-dom';
import AuthContext from 'providers/AuthContext';
import { useContext } from 'react';

const schema = yup.object().shape({
  email: yup.string().email().required('הכנס כתובת מייל תקינה'),
  password: yup.string(),
  //.min(6).max(15).lowercase ().uppercase().required('הסיסמא חייבת להכיל לפחות 6 תווים וחייב שימוש באות גדולה וקטנה'),
  password2: yup.string().oneOf([yup.ref('password'), null], 'הסיסמאות לא תואמות'),
  firstName: yup.string().required('שדה חובה'),
  lastName: yup.string().required('שדה חובה'),
  phone: yup.string().required('אנא הכנס מספר טלפון'),
  address: yup.string().required('הזן רחוב ומספר בית'),
  city: yup.string().required('שדה חובה'),
  birthDate: yup.string()
});

export default function Register() {
  const { loggedIn } = useContext(AuthContext);
  const { register: signup, isLoading } = useRegister();
  console.log('isLoading at register', isLoading);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const submitForm = async (data) => {
    signup({
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      address: data.address,
      city: data.city,
      birthDate: data.birthDate
    });
  };
  if (loggedIn) {
    return <Redirect to="/my/home" />;
  }

  return (
    <StyledRegister>
      <div className="form">
        <h1>עמוד הרשמה</h1>

        <form onSubmit={handleSubmit(submitForm)}>
          <div className="form-group">
            <IonItem counter={true}>
              <IonLabel position="floating">כתובת אימייל</IonLabel>
              <IonInput type="email" {...register('email')} />
            </IonItem>
            {errors.email && <IonNote slot="error">{errors.email.message}</IonNote>}
          </div>

          <div className="form-group">
            <IonItem counter={true}>
              <IonLabel position="floating">סיסמא</IonLabel>
              <IonInput type="password" {...register('password')} />
            </IonItem>
            {errors.password && <IonNote slot="error">{errors.password.message}</IonNote>}
          </div>

          <div className="form-group">
            <IonItem counter={true}>
              <IonLabel position="floating">אימות סיסמא</IonLabel>
              <IonInput type="password" {...register('password2')} />
            </IonItem>
            {errors.password2 && <IonNote slot="error">{errors.password2.message}</IonNote>}
          </div>

          <div className="form-group">
            <IonItem counter={true}>
              <IonLabel position="floating">שם פרטי</IonLabel>
              <IonInput type="text" {...register('firstName')} />
            </IonItem>
            {errors.firstName && <IonNote slot="error">{errors.firstName.message}</IonNote>}
          </div>

          <div className="form-group">
            <IonItem counter={true}>
              <IonLabel position="floating">שם משפחה</IonLabel>
              <IonInput type="text" {...register('lastName')} />
            </IonItem>
            {errors.lastName && <IonNote slot="error">{errors.lastName.message}</IonNote>}
          </div>

          <div className="form-group">
            <IonItem counter={true}>
              <IonLabel position="floating">טלפון</IonLabel>
              <IonInput type="tel" {...register('phone')} />
            </IonItem>
            {errors.phone && <IonNote slot="error">{errors.phone.message}</IonNote>}
          </div>

          <div className="form-group">
            <IonItem counter={true}>
              <IonLabel position="floating">כתובת</IonLabel>
              <IonInput type="text" {...register('address')} />
            </IonItem>
            {errors.address && <IonNote slot="error">{errors.address.message}</IonNote>}
          </div>

          <div className="form-group">
            <IonItem counter={true}>
              <IonLabel position="floating">עיר</IonLabel>
              <IonInput type="text" {...register('city')} />
            </IonItem>
            {errors.city && <IonNote slot="error">{errors.city.message}</IonNote>}
          </div>

          <div className="form-group">
            <IonItem counter={true}>
              <IonLabel position="fixed">תאריך לידה</IonLabel>
              <IonInput type="date" {...register('birthDate')} />
              {errors.birthDate && <IonNote slot="error">{errors.birthDate.message}</IonNote>}
            </IonItem>
          </div>
          <div className="form-group">
            <IonButton type="submit" expand="block">
              <IonIcon slot="start" icon={personAdd} />
              הרשם
            </IonButton>
            <IonLoading isOpen={isLoading} message={'טוען...'} />
            <p>
              רשומים כבר לאתר?<Link to="/login">לעמוד התחברות</Link>
            </p>
          </div>
        </form>
      </div>
    </StyledRegister>
  );
}
