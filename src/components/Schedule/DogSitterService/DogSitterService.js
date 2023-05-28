//!Ionic
import { IonButton, IonCard, IonLabel, IonText, IonToggle } from '@ionic/react';
//!React
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
//!Firebase
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { uuidv4 } from '@firebase/util';

//!Self-components
import useToast from 'hook/useToast';
import AuthContext from 'providers/AuthContext';
import FormInput from 'components/UI/FormInput';
//!style
import StyledDogSitterService from './StyledDogSitterService';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';


const schema = yup.object().shape({
  dateStart: yup.string().required(),
  dateStop: yup.string().required(),
  start: yup.string().required(),
  stop: yup.string().required(),
  payment: yup.string().required(),
  moreDogs: yup.string(),
  extension: yup.string()
});

const DogSitterService = ({ selectedService }) => {

  console.log('selectedService', selectedService);

  const { userId } = useContext(AuthContext) || {};

  const presentToast = useToast();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });
  const [availabilityId, setAvailabilityId] = useState(null);

  //update the user and move on to the next page

  async function submitForm(data) {
    const id = uuidv4();
    try {
      await setDoc(doc(db, 'availability', id), {
        ...data,
        availabilityId: id,
        date: Date.now(),
        userId: userId,
        role: selectedService
      });
      presentToast('The availability was created successfully', true);
      history.push(`/my/SendRequestMassage/${id}`); // Redirect after form submission
    } catch (error) {
      presentToast('Failed to create availability', false);
      console.error(error);
      console.log("role"  ,selectedService);  
    }
    reset();
  }

  return (
    <StyledDogSitterService>
      <IonCard>
        <IonText>
          <h1> Please fill your request</h1>
          <span>
            You are currently advertising a job for {selectedService} and caring for day or more. Please enter your availability dates
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

            <div className="button">
              <IonButton type="submit" fill="clear">
                {' '}
                Send Request
              </IonButton>
            </div>
          </form>
        </div>
      </IonCard>
      {availabilityId && <DogSitterService id={availabilityId} />}
    </StyledDogSitterService>
  );
};
export default DogSitterService;
DogSitterService.propTypes = {  
  selectedService: PropTypes.string.isRequired,
};