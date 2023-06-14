import { IonButton, IonSelectOption, IonSelect, IonHeader, IonToolbar, IonCard } from '@ionic/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { getDoc, arrayUnion,setDoc,doc, updateDoc } from 'firebase/firestore';

import { db } from '../../../firebase';
import { useState,useContext } from 'react';

import AuthContext from 'providers/AuthContext';

import useToast from 'hook/useToast';
import { useHistory } from 'react-router-dom';
import FormInput from 'components/UI/FormInput'
import { format } from 'date-fns';
import { uuidv4 } from '@firebase/util';



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

  const [pageStatus, setPageStatus] = useState('Dog-Sitter');

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
    const userRef = doc(db, 'availability', `${userId}`);
    const docSnapshot = await getDoc(userRef);
    const userRefUpdate = doc(db, 'users', userId);
      // Convert date strings to the desired format
  const formattedDateStart = format(new Date(data.dateStart), 'dd-MM-yyyy');
  const formattedDateStop = format(new Date(data.dateStop), 'dd-MM-yyyy');
  const id = uuidv4();

    try {
      if (docSnapshot.exists()) {
        await updateDoc(userRef, {
          [pageStatus]: arrayUnion({
            ...data,dateStart:formattedDateStart ,dateStop:formattedDateStop,availabilityId:id
          })
        });
      } else {
        await setDoc(userRef, {
          userId: userId, // Add the user's UID to the data
          [pageStatus]: [{ ...data, dateStart:formattedDateStart ,dateStop:formattedDateStop,availabilityId:id }]
          
        });
     
      }
      await updateDoc(userRefUpdate, {
        role: pageStatus,
        listOdAvailability: arrayUnion(id),
        pageStatus: pageStatus,
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
      <div className='form'>
        <form onSubmit={handleSubmit(submitForm)}>
          <IonCard>
          <IonHeader mode='ios'>
            <IonToolbar mode='ios'>
              <div className='action-bar'>
                <IonSelect
                  aria-label='Fruit'
                  interface='action-sheet'
                  placeholder={pageStatus}
                  onIonChange={(e) => setPageStatus(e.detail.value)}
                >
                  <IonSelectOption value='Dog-walker' onClick={handleTitleClick} >
                   <span> Dog-walker</span>
                  </IonSelectOption>
                  <IonSelectOption value='Dog-Sitter' onClick={handleTitleClick}>
                    <span>Dog-Sitter{' '} </span>
                  </IonSelectOption>
                </IonSelect>
              </div>
            </IonToolbar>
          </IonHeader>

        
          <div className='dateStart'>
              <FormInput
                label='From'
                name='dateStart'
                type='date'
                register={register}
                errors={errors}
              />
            </div>

            <div className='dateEnd'>
              <FormInput
                label='To'
                name='dateStop'
                type='date'
                register={register}
                errors={errors}
              />
            </div>

            <div className='fromStart'>
              <FormInput
                label='From'
                name='start'
                type='time'
                register={register}
                errors={errors}
              />
            </div>

            <div className='toEnd'>
              <FormInput
                label='To'
                name='stop'
                type='time'
                register={register}
                errors={errors}
              />
            </div>

            <div className='payment'>
              <FormInput
                label='Payment'
                name='payment'
                type='number'
                register={register}
                errors={errors}
              />
            </div>
              <h3>₪</h3>
          <div className='buttom'>
            <IonButton type='submit'fill='clear'>Save</IonButton>
          </div>
          </IonCard>
        </form>
      </div>
    </StyledServiceMode>
  );
};
export default ServiceMode;