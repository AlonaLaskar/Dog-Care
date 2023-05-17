//!Ionic
import { IonButton, IonCard, IonLabel, IonText, IonToggle } from '@ionic/react';
//!React
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
//!Firebase
import { getDoc, arrayUnion, setDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { format } from 'date-fns';

//!Self-components
import useToast from 'hook/useToast';
import { useUser } from '../../../hook/users';
import AuthContext from 'providers/AuthContext';
import FormInput from 'components/UI/FormInput';
//!style
import StyledDogSitterService from './StyledDogSitterService';

const schema = yup.object().shape({
  dateStart: yup.string().required(),
  dateStop: yup.string().required(),
  start: yup.string().required(),
  stop: yup.string().required(),
  payment: yup.string().required(),
  moreDogs: yup.string(),
  extension: yup.string()
});

const DogSitterService = () => {
  const { userId } = useContext(AuthContext) || {};
  const { user } = useUser(userId) || {};

  const presentToast = useToast();
  const history = useHistory();

  const [pageStatus, setPageStatus] = useState('');
  const [moreDogs, setMoreDogs] = useState(true);
  const [extension, noExtension] = useState(true);

  useEffect(() => {
    if (user?.role === 'dog-sitting') {
      setPageStatus('dog-sitting');
    } else if (user?.role === 'dog-walking') {
      setPageStatus('dog-walking');
    }
  }, [user]);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });
//!update the user and move on to the next page
async function submitForm(data) {

  const userRef = doc(db, 'availability', `${userId}`);
  const docSnapshot = await getDoc(userRef);
  const userRefUpdate = doc(db, 'users', userId);
  console.log('userId', userId);

  // Convert date strings to the desired format
  const formattedDateStart = format(new Date(data.dateStart), 'dd-MM-yyyy');
  const formattedDateStop = format(new Date(data.dateStop), 'dd-MM-yyyy');

  try {
    if (docSnapshot.exists()) {
      await updateDoc(userRef, {
      [pageStatus]: arrayUnion({ 
        ...data, moreDogs, extension, dateStart:formattedDateStart ,dateStop:formattedDateStop})
      });
    } else {
      await setDoc(userRef, {
        userId: userId, // Add the user's UID to the data
        [pageStatus]: [{ ...data, moreDogs, extension }]

      });
      console.log('userId22', userId);

    }
    
    presentToast('Your availability to work!', true);
    history.push('/my/SendRequestMassage');
    
    await updateDoc(userRefUpdate, {
      role: pageStatus,
      dateStart: formattedDateStart,
      start: data.start,
      dateStop: formattedDateStop,
      stop: data.stop,
      payment: data.payment,
      moreDogs: moreDogs,
      extension: extension
    });
  } catch (error) {
    presentToast(error.message, false);
    console.error(error.message);
  }
}


  return (
    <StyledDogSitterService>
      <IonCard>
        <IonText>
          <h1> Please fill your request</h1>
          <span>
            You are currently advertising a job for {user?.role} and caring for day or more Please enter your
            availability dates
          </span>
        </IonText>
        <div className="form">
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="dateStart">
              <FormInput label="From" name="dateStart" type="date" register={register} errors={errors} />
            </div>

            <div className="dateEnd">
              <FormInput label="To" name="dateStop" type="date" register={register} errors={errors} />
            </div>

            <div className="fromStart">
              <FormInput label="From" name="start" type="time" register={register} errors={errors} />
            </div>

            <div className="toEnd">
              <FormInput label="To" name="stop" type="time" register={register} errors={errors} />
            </div>

            <div className="payment">
              <FormInput label="Payment" name="payment" type="number" register={register} errors={errors} />
            </div>
            <div className="MoreDoges">
              <IonToggle color="success" checked={moreDogs} onIonChange={(e) => setMoreDogs(e.target.checked)}>
                <IonLabel>More dogs</IonLabel>
              </IonToggle>
            </div>

            {/* Conditionally render the toggles based on user's role */}
            {user?.role !== 'dog-walking' && (
              <>
                <div className="extension">
                  <IonToggle color="success" checked={extension} onIonChange={(e) => noExtension(e.target.checked)}>
                    <IonLabel>Option to extend</IonLabel>
                  </IonToggle>
                </div>
              </>
            )}
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
