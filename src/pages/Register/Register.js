import StyledRegister from './StyledRegister';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { IonItem, IonLabel, IonInput, IonNote} from '@ionic/react';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(15).lowercase ().uppercase().required('הסיסמא חייבת להכיל לפחות 6 תווים וחייב שימוש באות גדולה וקטנה'),
  password2:yup.string().oneOf([yup.ref('password'), null], 'הסיסמאות לא תואמות'),
  firstName: yup.string().required('שדה חובה'),
  lastName: yup.string().required('שדה חובה'),
  phone: yup.string().required('אנא הכנס מספר טלפון'),
  address: yup.string().required('הזן רחוב ומספר בית'),
  city: yup.string().required('שדה חובה'),
  birthDate: yup.string().required('שדה חובה')

});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <StyledRegister>
      <div className="form">
        <h1>עמוד הרשמה</h1>

        <form onSubmit={handleSubmit(submitForm)}>

          <div className="form-group">
            <IonItem counter={true}>
              <IonLabel position="floating">כתובת אימייל</IonLabel>
              <IonInput type="email" {...register('email')} />
              {errors.email && <IonNote slot="error">{errors.email.message}</IonNote>}
            </IonItem>
          </div>

          <div className="form-group">
            <IonItem counter={true}>
              <IonLabel position="floating">סיסמא</IonLabel>
              <IonInput type="password" {...register('password')} />
              {errors.password && <IonNote slot="error">{errors.password.message}</IonNote>}
            </IonItem>
          </div>

            <div className="form-group">
              <IonItem counter={true}>
                <IonLabel position="floating">אימות סיסמא</IonLabel>
                <IonInput type="password" {...register('password2')} />
                {errors.password2 && <IonNote slot="error">{errors.password2.message}</IonNote>}
              </IonItem>
            </div>

            <div className="form-group">
              <IonItem counter={true}>
                <IonLabel position="floating">שם פרטי</IonLabel>
                <IonInput type="text" {...register('firstName')} />
                {errors.firstName && <IonNote slot="error">{errors.firstName.message}</IonNote>}
              </IonItem>
            </div>

            <div className="form-group">
              <IonItem counter={true}>
                <IonLabel position="floating">שם משפחה</IonLabel>
                <IonInput type="text" {...register('lastName')} />
                {errors.lastName && <IonNote slot="error">{errors.lastName.message}</IonNote>}
              </IonItem>
            </div>

            <div className="form-group">
              <IonItem counter={true}>
                <IonLabel position="floating">טלפון</IonLabel>
                <IonInput type='tel'  {...register('phone')} />
                {errors.phone && <IonNote slot="error">{errors.phone.message}</IonNote>}
              </IonItem>
            </div>

            <div className="form-group">
              <IonItem counter={true}>
                <IonLabel position="floating">כתובת</IonLabel>
                <IonInput type="text" {...register('address')} />
                {errors.address && <IonNote slot="error">{errors.address.message}</IonNote>}
              </IonItem>
            </div>

            <div className="form-group">
              <IonItem counter={true}>
                <IonLabel position="floating">עיר</IonLabel>
                <IonInput type="text" {...register('city')} />
                {errors.city && <IonNote slot="error">{errors.city.message}</IonNote>}
              </IonItem>
            </div>

            <div className="form-group">
              <IonItem counter={true}>
                <IonLabel position='fixed'>תאריך לידה</IonLabel>
                <IonInput type="date" {...register('birthDate')} />
                {errors.birthDate && <IonNote slot="error">{errors.birthDate.message}</IonNote>}
              </IonItem>
            </div>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </StyledRegister>
  );
};
export default Register;
