import { IonButton, IonInput, IonLabel, IonItem, IonNote } from '@ionic/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection } from 'firebase/firestore';
import { db} from '../../../firebase';


//!style
import StyledManualSchedule from './StyledManualSchedule';

const schema = yup.object().shape({
  owner: yup.string().required('This is an important value'),
  dateStart: yup.string().required('This is an important value'),
  start: yup.string().required('This is an important value'),
  dateStop: yup.string().required('This is an important value'),
  stop: yup.string().required('This is an important value'),
  payment: yup.string().required('This is an important value'),
});

const ManualSchedule = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  function calculatePayment(startDate, startTime, endDate, endTime, rate) {
    const startDateTime = new Date(`${startDate}T${startTime}:00`);
    const endDateTime = new Date(`${endDate}T${endTime}:00`);
    const milliseconds = endDateTime - startDateTime;
    const hours = milliseconds / 3600000; // 1 hour = 3600000 milliseconds
    const payment = rate * hours;
    return { payment, hours };
  }

  const submitForm = (data) => {
    const { payment, hours } = calculatePayment(data.dateStart, data.start, data.dateStop, data.stop, data.payment);
//!set data to firebase
    addDoc(collection(db, 'WorkHistory'), {
      owner: data.owner,
      dateStart: data.dateStart,
      start: data.start,
      dateStop: data.dateStop,
      stop: data.stop,
      payment: data.payment,
      totalPayment: payment.toFixed(2),
      hours: hours.toFixed(2)
    });
  };

  return (
    <StyledManualSchedule>
        <div className="form">
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="owner">
              <IonItem counter={true}>
                <IonLabel position="floating">שם הבעלים</IonLabel>
                <IonInput type="text" {...register('owner')}></IonInput>
                <IonNote slot="error"> שם לא תקין</IonNote>
              </IonItem>
              {errors.owner && <IonNote slot="error">{errors.owner.message}</IonNote>}
            </div>

            <div className="date">
              <IonItem counter={true}>
                <IonLabel position="floating"> תאריך התחלת משמרת </IonLabel>
                <IonInput type="date" {...register('dateStart')}></IonInput>
                <IonNote slot="error"> תאריך לא תקין</IonNote>
              </IonItem>

              {errors.dateStart && <IonNote slot="error">{errors.dateStart.message}</IonNote>}
            </div>
            <div className="from">
              <IonItem counter={true}>
                <IonLabel position="floating">זמן התחלה</IonLabel>
                <IonInput type="time" {...register('start')}></IonInput>
                <IonNote slot="error"> זמן לא תקין</IonNote>
              </IonItem>
              {errors.start && <IonNote slot="error">{errors.start.message}</IonNote>}
            </div>
            <div className="date">
              <IonItem counter={true}>
                <IonLabel position="floating"> תאריך סיום המשמרת</IonLabel>
                <IonInput type="date" {...register('dateStop')}></IonInput>
                <IonNote slot="error"> תאריך לא תקין</IonNote>
              </IonItem>

              {errors.dateStop && <IonNote slot="error">{errors.dateStop.message}</IonNote>}
            </div>
            <div className="to">
              <IonItem counter={true}>
                <IonLabel position="floating">זמן סיום</IonLabel>
                <IonInput type="time" {...register('stop')}></IonInput>
                <IonNote slot="error"> זמן לא תקין</IonNote>
              </IonItem>
              {errors.stop && <IonNote slot="error">{errors.stop.message}</IonNote>}
            </div>
            <div className="payment">
              <IonItem counter={true}>
                <IonLabel position="floating">שכר לשעה</IonLabel>
                <IonInput type="number" {...register('payment')}></IonInput>
                <IonNote slot="error"> שעה לא תקינה</IonNote>
              </IonItem>
              {errors.payment && <IonNote slot="error">{errors.payment.message}</IonNote>}
            </div>
            <div className="buttom">
              <IonButton type="submit">שמור</IonButton>
            </div>
          </form>
        </div>
   
    </StyledManualSchedule>
  );
};
export default ManualSchedule;
