//! Packages
import { useState, useContext, useEffect } from 'react';
import { useHistory,Link,Redirect } from 'react-router-dom';
import { IonCol, IonContent, IonGrid, IonLabel, IonRow, IonText, IonTextarea } from '@ionic/react';

//! Firebase
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from 'firebase.js';

//! Form packages
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//! Custom hooks
import useToast from 'hook/useToast';
import { isEmailExists } from 'hook/isEmailExists';

//! Ionic components
import { IonLoading, IonButton, IonIcon, IonCard, IonCardTitle } from '@ionic/react';
import { personAdd, eyeOutline, eyeOffOutline,locationOutline } from 'ionicons/icons';
import GooglePlacesAutocomplete, { geocodeByPlaceId } from 'react-google-places-autocomplete';

//! Providers
import AuthContext from 'providers/AuthContext';
import FormContext from 'providers/FormContext';

//! Components
import Input from 'components/UI/Input';
import StyledRegister from './StyledRegister';
import boneLogo from '../../assets/boneLogo.png';

import { Geolocation } from '@capacitor/geolocation';


//! Yup schema for validation
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .min(8)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain at least 8 characters, including uppercase and lowercase letters, numbers, and special characters.'
    ),
  verifyPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords don\'t match'),
  fullName: yup.string().required(),
  tel: yup
    .string()
    .required()
    .matches(/^\d{10}$/, 'Invalid telephone number format.'),
  birthDate: yup
    .string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format. Use DD/MM/YYYY format.')
    .nullable(),
  aboutMe: yup.string().nullable(),
  location: yup.string() // Remove the "required" constraint
});

export default function Register() {
  
  
  const history = useHistory();
  
  //! Init states
  const [isLoading, setIsLoading] = useState(false);
  const { loggedIn } = useContext(AuthContext);
  const presentToast = useToast();

  // Check if user is logged in
  useEffect(() => {
    if (loggedIn) {
      <Redirect to="/my/home" />
    }
  }, [loggedIn, history]);

  const [locationFromGeolocation, setlocationFromGeolocation] = useState('');
  const [location, setLocation] = useState('');
  const [isGeolocationLocation, setIsGeolocationLocation] = useState(false); // Flag for geolocation location



  //password visible
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [ setPassword] = useState('');

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handlePasswordVisibility2 = () => {
    setPasswordVisible2(!passwordVisible2);
  };

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

  
  //Init forms
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });


  //! Handle register with credentials and profile data
  const handleRegister = async ({ email, password,...rest }) => {

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

    try {
      //! Check if email is already exists
      const emailExists = await isEmailExists(email);
      if (emailExists) {
        presentToast('The email is already in use', false);
        setIsLoading(false);
        return;
      }

      //! Create user with email and password
      try {
        const { user } = (await createUserWithEmailAndPassword(auth, email ?? '', password)) || {};
        const { uid: id } = user || {};

        await setDoc(doc(db, 'users', id), {
          id,
          email,
          username: email.split('@')[0],
          aboutMe: ' ',
          location:selectedLocation, // Save the selected location or an empty string if not selected
          avatar:
            'https://firebasestorage.googleapis.com/v0/b/dogsitter-58dc1.appspot.com/o/pictures%2F5cb8543b-f398-4b1e-a127-dc04a01753ae.jfif?alt=media&token=745c7c51-4483-4ae4-85e0-7a9462b9ea7a',
          ...rest
        });

        presentToast('Registration successfully', true);
        history.push(`/my/editProfile/:${id}`);
      } catch (error) {
        console.error(error);
      }

      //! Set user data in firestore
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <StyledRegister>
      <IonContent>
        <div className="logo">
          <div className="boneLogo">
            <img src={boneLogo} alt="logo" />
          </div>
        </div>

        <IonCard>
          <IonGrid>
            <IonRow>
              <IonCol size="12">
                <IonCardTitle>Join us!</IonCardTitle>
                <div className="subtitle">
                  <span>
                    Welcome to our dog care app, the perfect solution for busy pet owners who want to ensure their furry
                    friends get the exercise they need or are looked after while you are away from home.
                  </span>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>

          <FormContext.Provider value={{ errors, register }}>
            <form onSubmit={handleSubmit(handleRegister)}>
              <IonGrid>
                <IonRow>
                  <IonCol size="12">
                    <IonLabel className="label-outer">
                      Email Address <IonText color="danger">*</IonText>
                    </IonLabel>
                    <Input id="email" title="Email address " placeholder="Enter email address" />
                  </IonCol>
                  <IonCol size="6">
                    <IonLabel className="label-outer">
                      Password <IonText color="danger">*</IonText>
                    </IonLabel>
                    <div className="password-wrapper">
                      <Input
                        id="password"
                        title="Password"
                        type={passwordVisible ? 'text' : 'password'}
                        onIonChange={(e) => setPassword(e.detail.value || '')}
                      />
                      <IonIcon
                        className="password"
                        slot="end"
                        icon={passwordVisible ? eyeOffOutline : eyeOutline}
                        onClick={handlePasswordVisibility}
                      />
                    </div>
                  </IonCol>
                  <IonCol size="6">
                    <IonLabel className="label-outer">
                      Verify password <IonText color="danger">*</IonText>
                    </IonLabel>
                    <div className="password-wrapper">
                      <Input
                        id="verifyPassword"
                        title="Verify password"
                        type={passwordVisible2 ? 'text' : 'password'}
                        placeholder="Enter verify password"
                      />
                      <IonIcon
                        className="password"
                        slot="end"
                        icon={passwordVisible2 ? eyeOffOutline : eyeOutline}
                        onClick={handlePasswordVisibility2}
                      />
                    </div>
                  </IonCol>
                  <IonCol size="12">
                    <IonLabel className="label-outer">
                      Full Name <IonText color="danger">*</IonText>
                    </IonLabel>
                    <Input id="fullName" title="Full Name" placeholder="Enter fullName" type="string" />
                  </IonCol>
                  <IonCol size="12">
                    <IonLabel className="label-outer">
                    Phone Number <IonText color="danger">*</IonText>
                    </IonLabel>
                    <Input id="tel" title="Phone Number" type="tel" placeholder="Enter phone number" />
                  </IonCol>
                  <IonCol size="12">
                    <IonLabel className="label-outer">
                    Birthday <IonText color="danger">*</IonText>
                    </IonLabel>
                    <Input id="birthDate" title="Birthday" type="date" placeholder="Enter birthday" />
                  </IonCol>
                  <IonCol size="12">
                    <IonLabel className="label-outer">
                      About Me<IonText color="danger">*</IonText>
                    </IonLabel>
                    <IonTextarea
                      counter={true}
                      maxlength={100}
                      rows={3}
                      id="aboutMe"
                      placeholder="Help us get to know you better.."
                    ></IonTextarea>
                  </IonCol>
                  <IonCol size="12">
                    <IonLabel className="label-outer">
                      Location <IonText color="danger">*</IonText>
                    </IonLabel>
                    <div className="location">
                      <GooglePlacesAutocomplete
                        className="location"
                        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                        autocompletionRequest={{
                          componentRestrictions: {
                            country: ['il'] // restrict to Israel
                          }
                        }}
                        selectProps={{
                          value: location,
                          onChange: setLocation,
                          placeholder: location ? location : 'Enter your location'
                        }}
                      />
                      <IonIcon
                       icon={locationOutline} 
                       onClick={getLocation}
                       />
                    </div>
                  </IonCol>
                  
                </IonRow>
              </IonGrid>

              <div className="form-group">
                <IonGrid>
                  <IonRow className="ion-text-center">
                    <IonCol size="12">
                      <IonButton type="submit" expand="block">
                        <IonIcon slot="start" icon={personAdd} />
                        <span>Register</span>
                      </IonButton>
                      <p>
                        <span>Got an account? </span>
                        <Link to="/login">Login</Link>
                      </p>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </div>
            </form>
          </FormContext.Provider>
        </IonCard>
      </IonContent>

      <IonLoading isOpen={isLoading} message={'Loading...'} />
    </StyledRegister>
  );
}
