import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonSegment,
  IonIcon,
  IonSegmentButton,
  IonLabel,
  IonModal,
  IonButton
} from '@ionic/react';
import { db } from '../../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import ProfileCard from 'components/ProfileCard/ProfileCard';
import StyledHome from './StyledHome';
import ActionButton from 'components/ProfileCard/ActionButton/ActionButton';
import AuthContext from 'providers/AuthContext';
import { useContext } from 'react';
import Filtering from './Filtering';
import { query, where } from 'firebase/firestore';
import haversineDistance from 'haversine-distance'; // Or any other library for calculating distance between two coordinates
import { useEffect } from 'react';
import { Geolocation } from '@capacitor/geolocation';
import { useUser } from '../../hook/users';
import { Client } from '@googlemaps/google-maps-services-js';
import emptyStateImage from '../../assets/emptyStateImage1.jpg';
import { optionsOutline } from 'ionicons/icons';

const useAvailabilities = (selectedRole) => {
  const availabilitiesRef = collection(db, 'availability');
  const q = query(availabilitiesRef, where('role', '==', selectedRole));
  const [availabilities, isLoading] = useCollectionData(q, { idField: 'availabilityId' });
  return { availabilities, isLoading };
};
const Home = () => {
  const { userId } = useContext(AuthContext) || {};
  const { user } = useUser(userId) || {};

  const client = new Client({}); // Import the Client from @googlemaps/google-maps-services-js

  const geocodeAddress = async (address) => {
    const response = await client.geocode({
      params: {
        address: address,
        key: process.env.REACT_APP_GOOGLE_API_KEY
      }
    });

    const results = response.data.results;
    if (results && results.length > 0) {
      return {
        lat: results[0].geometry.location.lat,
        lng: results[0].geometry.location.lng
      };
    } else {
      throw new Error('No results found');
    }
  };

  const [filterDistance, setFilterDistance] = useState(0); // Distance in kilometers

  const [animateUnmatchButton, setAnimateUnmatchButton] = useState(false);
  const [animateMatchButton, setAnimateMatchButton] = useState(false);

  // Create state variables for the filters
  const [filterHourlyRate, setFilterHourlyRate] = useState(0);

  // Create state variable for the modal
  const [showModal, setShowModal] = useState(false);

  const [selectedRole, setSelectedRole] = useState('Dog-Sitter');

  const ProfileEvents = {
    onMatch: () => {
      setAnimateMatchButton(true);
      setAnimateUnmatchButton(false);
    },
    onUnmatch: () => {
      setAnimateUnmatchButton(true);
      setAnimateMatchButton(false);
    },
    onReset: () => {
      setAnimateUnmatchButton(false);
      setAnimateMatchButton(false);
    }
  };

  const { availabilities, isLoading } = useAvailabilities(selectedRole) || {};

  async function calculateDistance(userAddress, availableAddress) {

    try {
      const userCoordinates = await geocodeAddress(userAddress);
      const availableCoordinates = await geocodeAddress(availableAddress);
  

      return (
        haversineDistance(
          { lat: userCoordinates.lat, lng: userCoordinates.lng },
          { lat: availableCoordinates.lat, lon: availableCoordinates.lng }
        ) / 1000
      ); // Convert distance to kilometers
    } catch (error) {
      console.log(error);
    }
  }

  if (isLoading || !Array.isArray(availabilities)) {
    return <div>Loading...</div>;
  }

  // Apply all filters
  const filteredAvailabilities = availabilities.filter(
    (availability) =>
      availability.role === selectedRole &&
      availability.userId !== userId &&
      (!filterHourlyRate || availability.payment >= filterHourlyRate) &&
      (!filterDistance || calculateDistance(user.location, availability.location) <= filterDistance) // Add distance filter
  );

  return (
    <StyledHome>
      <IonHeader>
        <IonSegment color='secondary' onIonChange={(e) => setSelectedRole(e.detail.value)}>
          <IonSegmentButton value='Dog-Sitter'>
            <IonLabel>Dog-Sitter</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value='Dog Walker'>
            <IonLabel>Dog Walker</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonHeader>
      <IonContent>
        <div className='card-stack-container'>
          {filteredAvailabilities.length > 0 ? (
            filteredAvailabilities.map((availability) => (
              <ProfileCard
                availability={availability}
                onMatch={ProfileEvents.onMatch}
                onUnmatch={ProfileEvents.onUnmatch}
                onReset={ProfileEvents.onReset}
                key={availability.availabilityId}
              />
            ))
          ) : (
            <div>
              <IonLabel className='noavila'>No availability found</IonLabel>
              <img src={emptyStateImage} alt='No availability found' />
            </div>
          )}
        </div>

        {filteredAvailabilities.length > 0 && (
          <ActionButton animateMatchButton={animateMatchButton} animateUnmatchButton={animateUnmatchButton} />
        )}
        {/* Add a button that opens the modal with the filtering options */}
        <IonButton onClick={() => setShowModal(true)} className='filter-button' fill='clear'>
          <IonIcon icon={optionsOutline} color='light' size='large' />
        </IonButton>
        {/* Modal with the filtering options */}
        <IonModal
          isOpen={showModal}
          onDidDismiss={() => setShowModal(false)}
          style={{
            width: '335px',
            height: '318px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
          className='filter'
        >
          <Filtering
            filterDistance={filterDistance}
            setFilterDistance={setFilterDistance}
            filterHourlyRate={filterHourlyRate}
            setFilterHourlyRate={setFilterHourlyRate}
          />
          <IonButton className='close' onClick={() => setShowModal(false)} fill='clear' 
          style={{
            position: 'absolute',
            top: '89%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            with: '119px',
            height: '37px',
            maxWidth: '335px',
            maxHeight: '45px',
            background: '#8ECAE6',
            borderRadius: '6px',
          }}>
            Done
          </IonButton>
        </IonModal>
      </IonContent>
    </StyledHome>
  );
};

export default Home;
