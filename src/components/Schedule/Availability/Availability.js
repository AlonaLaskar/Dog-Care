import { IonButton, IonInput, IonLabel, IonItem, IonNote } from '@ionic/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection } from 'firebase/firestore';
import { db} from '../../../firebase';
import { useState } from 'react';
import { IonSelectOption ,IonSelect,IonHeader,IonToolbar } from '@ionic/react';



//!style
import StyledavAilability from './StyledavAilability';

const schema = yup.object().shape({
pageStatus: yup.string().required('This is an important value'),
  dateStart: yup.string().required('This is an important value'),
  start: yup.string().required('This is an important value'),
  dateStop: yup.string().required('This is an important value'),
  stop: yup.string().required('This is an important value'),
  payment: yup.string().required('This is an important value'),
});

const Availability = () => {
    
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });
    
    const [pageStatus, setPageStatus] = useState('Dog-walker');
    const handleTitleClick = () => {
        setPageStatus((prevStatus) =>
          prevStatus === 'Dog-walker' ? 'Dog-Sitter' : 'Dog-walker'
        );
      };



  const submitForm = (data) => {
    console.log( "data before",data);

//!set data to firebase
    addDoc(collection(db, 'availability'), {
      pageStatus: pageStatus,
      dateStart: data.dateStart,
      start: data.start,
      dateStop: data.dateStop,
      stop: data.stop,
      payment: data.payment,
  
    });
    console.log('data is:',data);
  };

  return (
    <StyledavAilability>
        <div className="form">
          <form onSubmit={handleSubmit(submitForm)}>
 
         

            <div className="date">
              <IonItem counter={true}>
                <IonLabel position="stack"> The day the shift starts</IonLabel>
                <IonInput type="date" {...register('dateStart')}></IonInput>
                <IonNote slot="error"> Invalid date</IonNote>
              </IonItem>
              {errors.dateStart && <IonNote slot="error">{errors.dateStart.message}</IonNote>}
            </div>

            <div className="from">
              <IonItem counter={true}>
                <IonLabel position="stack">The time the shift starts</IonLabel>
                <IonInput type="time" {...register('start')}></IonInput>
                <IonNote slot="error"> Incorrect time</IonNote>
              </IonItem>
              {errors.start && <IonNote slot="error">{errors.start.message}</IonNote>}
            </div>

            <div className="date">
              <IonItem counter={true}>
                <IonLabel position="stack">  The day the shift End</IonLabel>
                <IonInput type="date" {...register('dateStop')}></IonInput>
                <IonNote slot="error"> Invalid date</IonNote>
              </IonItem>

              {errors.dateStop && <IonNote slot="error">{errors.dateStop.message}</IonNote>}
            </div>

            <div className="to">
              <IonItem counter={true}>
                <IonLabel position="stack"> The time the shift End</IonLabel>
                <IonInput type="time" {...register('stop')}></IonInput>
                <IonNote slot="error"> Incorrect time</IonNote>
              </IonItem>
              {errors.stop && <IonNote slot="error">{errors.stop.message}</IonNote>}
            </div>

            <div className="payment">
              <IonItem counter={true}>
                <IonLabel position="stack">Hourly payment</IonLabel>
                <IonInput type="number" {...register('payment')}></IonInput>
                <IonNote slot="error"> Incorrect time</IonNote>
              </IonItem>
              {errors.payment && <IonNote slot="error">{errors.payment.message}</IonNote>}
            </div>
            <div className="buttom">
              <IonButton type="submit">Save</IonButton>
            </div>

          </form>
        </div>
   
    </StyledavAilability>
  );
};
export default Availability;
