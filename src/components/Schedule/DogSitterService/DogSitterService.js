//!Ionic
import { IonCard, IonText, IonButton } from '@ionic/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GooglePlacesAutocomplete, { geocodeByPlaceId } from 'react-google-places-autocomplete';

//!Firebase
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { uuidv4 } from '@firebase/util';

//!Self-components
import useToast from 'hook/useToast';
import AuthContext from 'providers/AuthContext';

//!style
import StyledDogSitterService from './StyledDogSitterService';
import PropTypes from 'prop-types';
import Input from 'components/UI/Input/Input';
import FormContext from 'providers/FormContext';

const schema = yup.object().shape({
  dateStart: yup.string().required(),
  dateStop: yup.string().required(),
  start: yup.string().required(),
  stop: yup.string().required(),
  payment: yup.string().required(),
  location: yup.string(),
  aboutMe: yup.string()
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
  const [availabilityId] = useState(null);

  const [location, setLocation] = useState(null);
  console.log('location', location);

  //update the user and move on to the next page
  async function submitForm(data) {
    const id = uuidv4();
    console.log('data', data);

    // Get location details from google places
    const placeId = location.value.place_id;
    const geocoded = await geocodeByPlaceId(placeId);
    const locationDetails = geocoded[0];

    // Perform availability validation
    const selectedStartDate = new Date(data.dateStart);
    const selectedEndDate = new Date(data.dateStop);

    // Check if the year is not 2023
    if (selectedStartDate.getFullYear() !== 2023 || selectedEndDate.getFullYear() !== 2023) {
      presentToast('Please select a year as 2023.', false);
      return;
    }

    // Check if the start date is greater than the end date
    if (selectedStartDate.toDateString() === selectedEndDate.toDateString()) {
      const selectedStartTime = new Date(`2000-01-01T${data.start}`);
      const selectedEndTime = new Date(`2000-01-01T${data.stop}`);
      if (selectedStartTime.getTime() >= selectedEndTime.getTime()) {
        presentToast('Start time cannot be greater than the end time.', false);
        return;
      }
    }

    try {
      // Convert date format to DD-MM-YYYY
      const formattedStartDate = selectedStartDate.toLocaleDateString('en-GB');
      const formattedEndDate = selectedEndDate.toLocaleDateString('en-GB');

      // Save the availability record to the database
      await setDoc(doc(db, 'availability', id), {
        ...data,
        availabilityId: id,
        date: Date.now(),
        userId: userId,
        location: locationDetails?.formatted_address || '', // Save the selected location or an empty string if not selected
        role: selectedService,
        dateStart: formattedStartDate, // Save formatted start date
        dateStop: formattedEndDate // Save formatted end date
      });

      // Store id in localStorage
      localStorage.setItem('availabilityId', id);
      presentToast('The availability was created successfully', true);
      history.push(`/my/SendRequestMassage/${id}`); // Redirect after form submission
    } catch (error) {
      presentToast('Failed to create availability', false);
      console.error(error);
    }

    reset();
  }
  return (
    <StyledDogSitterService>
      <IonCard>
        <IonText>
          <h1> Please fill your request</h1>
          {selectedService === 'Dog-Sitter' && (
            <span>
              You are currently advertising a job for dog sitter and caring for day or more. Please enter your
              availability dates. (the payment is per day)
            </span>
          )}
          {selectedService === 'Dog-walker' && (
            <span>
              You are currently advertising a job for dog walker for permanent or one-off travel, please enter your
              dates of availability. (the payment is per hour)
            </span>
          )}
        </IonText>
        <FormContext.Provider value={{ errors, register }}>
          <form onSubmit={handleSubmit(submitForm)}>
            <Input id='dateStart' type='date' label='From' />
            <Input id='dateStop' type='date' label='To' />
            <Input id='start' type='time' label='From' />
            <Input id='stop' type='time' label='To' />
            <Input id='payment' type='number' label='Payment' />
            <Input id='aboutMe' type='text' label='About me' title='Add details about the service ' />

            <div className='Location'>
              <span>Location</span>
              <GooglePlacesAutocomplete
                className='Location'
                apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                autocompletionRequest={{
                  componentRestrictions: {
                    country: ['il'] // restrict to Israel
                  }
                }}
                selectProps={{
                  value: location,
                  onChange: setLocation
                }}
              />
            </div>

            <div className='button'>
              <IonButton type='submit' fill='clear'>
                {' '}
                Send Request
              </IonButton>
            </div>
          </form>
        </FormContext.Provider>
      </IonCard>
      {availabilityId && <DogSitterService id={availabilityId} />}
    </StyledDogSitterService>
  );
};
export default DogSitterService;
DogSitterService.propTypes = {
  selectedService: PropTypes.string.isRequired
};
