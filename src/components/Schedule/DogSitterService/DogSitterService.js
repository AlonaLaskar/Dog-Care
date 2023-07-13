//!Ionic
import { IonCard, IonText, IonButton, IonGrid, IonIcon, IonRow, IonCol, IonLabel, IonTextarea, IonLoading } from '@ionic/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import GooglePlacesAutocomplete, { geocodeByPlaceId } from 'react-google-places-autocomplete';
import { locationOutline } from 'ionicons/icons';
import { Geolocation } from '@capacitor/geolocation';

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

  const { userId } = useContext(AuthContext) || {};

  const presentToast = useToast();
  const history = useHistory();


  const [locationFromGeolocation, setlocationFromGeolocation] = useState('');
  const [location, setLocation] = useState('');
  const [isGeolocationLocation, setIsGeolocationLocation] = useState(false); // Flag for geolocation location
  const [ isLoading ,setIsLoading] = useState(false);


    //!Get user's location from the icon location
    const getLocation = async () => {
      try {
        const position = await Geolocation.getCurrentPosition();
        const { latitude, longitude } = position.coords;
  
        // Reverse geocoding with Firebase's Geolocation API
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
        );
        const data = await response.json();
        const formattedAddress = data.results[0].formatted_address;
        setlocationFromGeolocation(formattedAddress);
        setLocation(formattedAddress); // Set the location value
        setIsGeolocationLocation(true); // Set the flag for geolocation location
      } catch (error) {
        console.error('Error getting location:', error);
      }
    };
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });
  const [availabilityId] = useState(null);


  //update the user and move on to the next page
  async function submitForm(data) {
    const id = uuidv4();

    setIsLoading(true);
    // Get location details from google places
    const placeId = location?.value?.place_id;
    let selectedLocation = '';
    
    if (isGeolocationLocation) {
      // Use the geolocation location if obtained from the icon click
      selectedLocation = locationFromGeolocation;
    } else if (placeId) {
      // Get the location details from Google Places if placeId is available
      const geocoded = await geocodeByPlaceId(placeId);
      const locationDetails = geocoded[0];
      selectedLocation = locationDetails?.formatted_address || '';
    } else {
      // Handle the case when no placeId or geolocation location is available
      console.error('No placeId or geolocation location available');
      setIsLoading(false);
      return;
    }
    console.log(location);

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
        location:selectedLocation, // Save the selected location or an empty string if not selected
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
    setIsLoading(false);
  }
  if (isLoading) {
    return <IonLoading  isOpen={isLoading} />;
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
            <IonGrid>
              <IonRow>
                <IonCol size="6">
                  <Input id="dateStart" type="date" label="From" />
                </IonCol>
                <IonCol size="6">
                  <Input id="dateStop" type="date" label="To" />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="6">
                  <Input id="start" type="time" label="From" />
                </IonCol>
                <IonCol size="6">
                  <Input id="stop" type="time" label="To" />
                </IonCol>
              </IonRow>
              <IonRow>
              <IonCol size="12">
              <IonLabel>Location</IonLabel>
              <div className="location">
                <GooglePlacesAutocomplete
                  className="Location"
                  apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                  selectProps={{
                    value: location,
                    onChange: setLocation,
                    placeholder: location ? location : 'Enter your location',
                  }}
                  {...register('location')}
                />
                <IonIcon
                  icon={locationOutline}
                  onClick={getLocation}
                />
              </div>
            </IonCol>

              </IonRow>
              <IonRow>
                <IonCol size="12">
                  <Input id="payment" type="number" label="Payment" />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12">
                  <IonTextarea
                      counter={true}
                      maxlength={100}
                      rows={3}
                      id="aboutMe"
                      placeholder="Add details about the service "
                      {...register('aboutMe')}
                    ></IonTextarea>
                </IonCol>
                
              </IonRow>
            </IonGrid>

            <div className="button">
              <IonButton type="submit" fill="clear">
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
