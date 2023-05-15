import {
  IonToggle,
  IonCard,
  IonText,
  IonLabel,
  IonButton
} from '@ionic/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { getDoc, arrayUnion, setDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useState } from 'react';

import AuthContext from 'providers/AuthContext';

import { useContext } from 'react';
import useToast from 'hook/useToast';
import { useHistory } from 'react-router-dom';
import FormInput from 'components/UI/FormInput'
//!style
import StyledDogSitterService from './StyledDogSitterService';

const schema = yup.object().shape({
  dateStart: yup.string().required('This is an important value'),
  dateStop: yup.string().required('This is an important value'),
  start: yup.string().required('This is an important value'),
  stop: yup.string().required('This is an important value'),
  payment: yup.string().required('This is an important value'),
  moreDogs: yup.string(),
  extension: yup.string()

});

const DogSitterService = () => {
  const { userId } = useContext(AuthContext) || {};
  const presentToast = useToast();
  const history = useHistory();

  const [pageStatus] = useState('Dog-Sitter');
  const [moreDogs, setMoreDogs] = useState(true);
  const[extension, noExtension]=useState(true);


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
    try {
      if (docSnapshot.exists()) {
        await updateDoc(userRef, {
          [pageStatus]: arrayUnion({ ...data, moreDogs, extension })
        });
      } else {
        await setDoc(userRef, { [pageStatus]: [{ ...data, moreDogs,extension }] });
        presentToast('Your availability to work!', true);
        history.push('/my/SendRequestMassage');
      }
    } catch (error) {
      presentToast(error.message, false);
      console.log(error.message);
    }
  }

  return (
    <StyledDogSitterService>
      <IonCard>
        <IonText>
          <h1> Please fill your request</h1>
           <span>You are currently advertising a job for dog sitting and caring for day or more
              Please enter your availability dates</span>
        </IonText>
        <div className="form">
          <form onSubmit={handleSubmit(submitForm)}>
     

            <div className="dateStart">
              <FormInput
                label="From"
                name="dateStart"
                type="date"
                register={register}
                errors={errors}
              />
            </div>

            <div className="dateEnd">
              <FormInput
                label="To"
                name="dateStop"
                type="date"
                register={register}
                errors={errors}
              />
            </div>

            <div className="fromStart">
              <FormInput
                label="From"
                name="start"
                type="time"
                register={register}
                errors={errors}
              />
            </div>

            <div className="toEnd">
              <FormInput
                label="To"
                name="stop"
                type="time"
                register={register}
                errors={errors}
              />
            </div>

            <div className="payment">
              <FormInput
                label="Payment"
                name="payment"
                type="number"
                register={register}
                errors={errors}
              />
            </div>

            <div className="MoreDoges">
            <IonToggle
            color="success"
            checked={moreDogs}
            onIonChange={(e) => setMoreDogs(e.target.checked)}
          >
          <IonLabel>More dogs</IonLabel>
        </IonToggle>

            </div>

            <div className="extension">
            <IonToggle 
             color="success" 
             checked={extension}
            onIonChange={(e) => noExtension(e.target.checked)}
              >

            <IonLabel>Option to extend</IonLabel>  
           </IonToggle>
            </div>

            <div className="button">
              <IonButton type="submit"> Send Request</IonButton>
            </div>



          
          </form>
        </div>
      </IonCard>
    </StyledDogSitterService>
  );
}; 
export default DogSitterService;
