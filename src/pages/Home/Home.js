import React, { useState, useContext } from 'react';
import { IonContent, IonModal, IonButton, IonIcon, IonLabel } from '@ionic/react';

import ProfileCard from 'components/ProfileCard/ProfileCard';
import StyledHome from './StyledHome';
import AuthContext from 'providers/AuthContext';
import Filtering from './Filtering';
import haversineDistance from 'haversine-distance'; // Or any other library for calculating distance between two coordinates
import { Geolocation } from '@capacitor/geolocation';
import { useUser } from '../../hook/users';
import { Client } from '@googlemaps/google-maps-services-js';
import emptyStateImage from '../../assets/emptyStateImage1.jpg';
import { optionsOutline } from 'ionicons/icons';
import { useEffect } from 'react';
import { useAvilabiltys } from '../../hook/availabilityHook';

const Home = () => {
  const geocodeAddress = async (address) => {
    const client = new Client();
    const response = await client.geocode({
      params: {
        address,
        key: process.env.REACT_APP_GOOGLE_API_KEY
      },
      timeout: 1000 // Optional timeout value
    });

    if (response.status === 200 && response.data.results.length > 0) {
      const result = response.data.results[0];
      const { lat, lng } = result.geometry.location;
      console.log('lat, lng', lat, lng);
      return { latitude: lat, longitude: lng };
    } else {
      throw new Error('Failed to geocode address');
    }
  };

  const { userId } = useContext(AuthContext) || {};
  const { user } = useUser(userId) || {};

  const [availabilityss, setAvailabilityss] = useState([]);
  const [filterDistance, setFilterDistance] = useState(0); // Distance in kilometers
  const [filterHourlyRate, setFilterHourlyRate] = useState(0);
  const [filterRole, setFilterRole] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const[filterDateEnd,setFilterDateEnd]=useState('')



  const [tempFilterDistance, setTempFilterDistance] = useState(filterDistance);
  const [tempFilterHourlyRate, setTempFilterHourlyRate] = useState(filterHourlyRate);
  const [tempFilterRole, setTempFilterRole] = useState(filterRole);
  const [tempFilterDate, setTempFilterDate] = useState(filterDate);
  const [tempFilterDateEnd, setTempFilterDateEnd] = useState(filterDateEnd);

  useEffect(() => {
    const fetchAvailabilityss = async () => {
      const availabilityss = await useAvilabiltys();

      // Get current position
      const { coords } = await Geolocation.getCurrentPosition();
      const userLocation = {
        latitude: coords.latitude,
        longitude: coords.longitude
      };

      console.log('userLocation', userLocation);

      const availabilityssWithDistance = await Promise.all(
        availabilityss.map(async (availability) => {
          const address = availability.location;
          try {
            const availabilityLocation = await geocodeAddress(address);
            const distanceInMeters = haversineDistance(userLocation, availabilityLocation);
            const distanceInKilometers = (distanceInMeters / 1000).toFixed(0); // Convert meters to kilometers and round to 2 decimal places

            console.log('distance', distanceInKilometers); // Output the distance in kilometers
            return { ...availability, distanceInKilometers  };
          } catch (error) {
            console.error(`Failed to geocode address "${address}": ${error}`);
            // Handle the error as needed
            return availability; // Return the availability without distance calculation
          }
        })
      );
      setAvailabilityss(availabilityssWithDistance); // Update the state with distances
    };
    fetchAvailabilityss();
  }, []);

  // Create state variable for the modal
  const [showModal, setShowModal] = useState(false);

  // Apply all filters
  const filteredAvailabilities = availabilityss.filter(
    (availability) =>
      availability.userId !== userId &&
      (!filterHourlyRate || availability.payment >= filterHourlyRate) &&
      (!filterDistance || availability.distanceInKilometers >= filterDistance) &&
      (!filterDate || availability.dateStart === filterDate)&&
      (!filterRole || availability.role === filterRole)&&
      (!filterDateEnd || availability.dateEnd === filterDateEnd)
  );

  console.log('filteredAvailabilities -in home', filteredAvailabilities);

  return (
    <StyledHome>
      <IonContent>
        <div className="card-stack-container">
          <IonButton onClick={() => setShowModal(true)} className="filter-button" fill="clear">
            <IonIcon icon={optionsOutline} color="light" size="large" />
          </IonButton>
          {filteredAvailabilities.length > 0 ? (
            filteredAvailabilities.map((availability) => (
              <ProfileCard availability={availability} 
              key={availability.availabilityId}
              distance={availability.distanceInKilometers} // Pass distanceInKilometers as a prop
              />
            ))
          ) : (
            <div>
              <IonLabel className="noavila">No availability found</IonLabel>
              <img src={emptyStateImage} alt="No availability found" />
            </div>
          )}
        </div>

        <IonModal
          isOpen={showModal}
          onDidDismiss={() => setShowModal(false)}
          style={{
            width: '335px',
            height: '350px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
          className="filter"
        >
          <Filtering
            filterDistance={tempFilterDistance}
            setFilterDistance={setTempFilterDistance}
            filterHourlyRate={tempFilterHourlyRate}
            setFilterHourlyRate={setTempFilterHourlyRate}
            filterRole={tempFilterRole}
            setFilterRole={setTempFilterRole}
            filterDate={tempFilterDate}
            setFilterDate={setTempFilterDate}
            filterDateEnd={tempFilterDateEnd}
            setFilterDateEnd={setTempFilterDateEnd}
          />
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <IonButton
              className="close"
              onClick={() => {
                setFilterDistance(tempFilterDistance);
                setFilterHourlyRate(tempFilterHourlyRate);
                setFilterRole(tempFilterRole);
                setFilterDate(tempFilterDate);
                setFilterDateEnd(tempFilterDateEnd);
                setShowModal(false);
              }}
              fill="clear"
              style={{
                height: '37px',
                width: '200px',
                background: 'rgb(142, 202, 230)',
                borderRadius: '6px',
                color: '#024C71'
              }}
            >
              Done
            </IonButton>
          </div>
        </IonModal>
      </IonContent>
    </StyledHome>
  );
};

export default Home;
