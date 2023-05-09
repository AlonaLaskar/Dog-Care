import { IonButton, IonInput, IonLabel, IonItem, IonNote,IonSelectOption, IonSelect, IonHeader, IonToolbar } from '@ionic/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useState } from 'react';

import AuthContext from 'providers/AuthContext';

import { useContext } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import useToast from 'hook/useToast';
import { useHistory } from 'react-router-dom';


//!style
import StyledServiceMode from './StyledServiceMode';

const schema = yup.object().shape({
  dateStart: yup.string().required('This is an important value'),
  start: yup.string().required('This is an important value'),
  dateStop: yup.string().required('This is an important value'),
  stop: yup.string().required('This is an important value'),
  payment: yup.string().required('This is an important value')
});

const ServiceMode = () => {

  
  const { userId } = useContext(AuthContext) || {};
  const presentToast = useToast();
  const history = useHistory();

  const [pageStatus, setPageStatus] = useState('Dog-walker');

  const handleTitleClick = () => {
    setPageStatus((prevStatus) => (prevStatus === 'Dog-walker' ? 'Dog-Sitter' : 'Dog-walker'));
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  async function submitForm(data) {

    try {
      // Set data to Firebase
     await addDoc(collection(db, 'availability'), {
        uid: userId,
        pageStatus: pageStatus,
        dateStart: data.dateStart,
        start: data.start,
        dateStop: data.dateStop,
        stop: data.stop,
        payment: data.payment
      });

      // Update the users collection
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, {
        role: pageStatus,
        dateStart: data.dateStart,
        start: data.start,
        dateStop: data.dateStop,
        stop: data.stop,
        payment: data.payment
      });
      presentToast('Your availability to work!', true);
      history.push('/my/home');
    } catch (error) {
      presentToast(error.message, false);
    }
  }


  return (
    <StyledServiceMode>
      <div className="form">
        <form onSubmit={handleSubmit(submitForm)}>
          <IonHeader mode="ios">
            <IonToolbar mode="ios">
              <div className="action-bar">
                <IonSelect
                  aria-label="Fruit"
                  interface="action-sheet"
                  placeholder={pageStatus}
                  onIonChange={(e) => setPageStatus(e.detail.value)}
                >
                  <IonSelectOption value="Dog-walker" onClick={handleTitleClick} >
                   <span> Dog-walker</span>
                  </IonSelectOption>
                  <IonSelectOption value="Dog-Sitter" onClick={handleTitleClick}>
                    <span>Dog-Sitter{' '} </span>
                  </IonSelectOption>
                </IonSelect>
              </div>
            </IonToolbar>
          </IonHeader>

        
          <div className="date">
            <IonItem >
              <IonInput position="stack" type="date" label=' The day the shift starts' {...register('dateStart')}></IonInput>
            </IonItem>
            {errors.dateStart && <IonNote slot="error">{errors.dateStart.message}</IonNote>}
          </div>
          <div className="from">
            <IonItem >
              <IonInput position="stack" label='The time the shift starts' type="time" {...register('start')}></IonInput>
            </IonItem>
            {errors.start && <IonNote slot="error">{errors.start.message}</IonNote>}
          </div>
          <div className="date">
            <IonItem>
              <IonInput position="stack" label='Start shift' type="date" {...register('dateStop')}></IonInput>
            </IonItem>
            {errors.dateStop && <IonNote slot="error">{errors.dateStop.message}</IonNote>}
          </div>
          <div className="to">
            <IonItem>
              <IonInput type="time" position="stack" label='End shift' {...register('stop')}></IonInput>
            </IonItem>
            {errors.stop && <IonNote slot="error">{errors.stop.message}</IonNote>}
          </div>

          <div className="payment">
            <IonItem >
              <IonInput type="number"position="stack" label='Hourly payment' {...register('payment')}></IonInput>
            </IonItem>

            {errors.payment && <IonNote slot="error">{errors.payment.message}</IonNote>}

          </div>
          <div className="buttom">
            <IonButton type="submit">Save</IonButton>
          </div>
        </form>
      </div>
    </StyledServiceMode>
  );
};
export default ServiceMode;
