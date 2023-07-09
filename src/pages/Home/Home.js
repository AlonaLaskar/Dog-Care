//!React+Ionic
import React, { useState, useContext, useEffect } from 'react';
import { IonContent, IonModal, IonButton, IonIcon, IonLabel } from '@ionic/react';
import { optionsOutline } from 'ionicons/icons';
//!GoogleMaps+calculateDistance
import { Geolocation } from '@capacitor/geolocation';
import { Client } from '@googlemaps/google-maps-services-js';
import haversineDistance from 'haversine-distance';
//!Self_components
import ProfileCard from 'components/ProfileCard/ProfileCard';
import AuthContext from 'providers/AuthContext';
import Filtering from './Filtering';
import { useAvilabiltys } from '../../hook/availabilityHook';
//!Styled_components
import StyledHome from './StyledHome';
import emptyStateImage from '../../assets/emptyStateImage1.jpg';

const Home = () => {
  //!CalculateDistance
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
      return { latitude: lat, longitude: lng };
    } else {
      throw new Error('Failed to geocode address');
    }
  };

  const { userId } = useContext(AuthContext) || {};

  const [availabilityss, setAvailabilityss] = useState([]);
  const [filterDistance, setFilterDistance] = useState(0); // Distance in kilometers

  useEffect(() => {
    const fetchAvailabilityss = async () => {
      const availabilityss = await useAvilabiltys();

      // Get current position
      const { coords } = await Geolocation.getCurrentPosition();
      const userLocation = {
        latitude: coords.latitude,
        longitude: coords.longitude
      };

      const availabilityssWithDistance = await Promise.all(
        availabilityss.map(async (availability) => {
          const address = availability?.location;
          if (!address) {
            return availability; // Return the availability without distance calculation
          }
          try {
            const availabilityLocation = await geocodeAddress(address);
            const distanceInMeters = haversineDistance(userLocation, availabilityLocation);
            const distanceInKilometers = (distanceInMeters / 1000).toFixed(0); // Convert meters to kilometers and round to 2 decimal places

            return { ...availability, distanceInKilometers };
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

  //!Filtering
  const [filterHourlyRate, setFilterHourlyRate] = useState(0);
  const [filterRole, setFilterRole] = useState('');
  const [filterDdateStart, setFilterDateStart] = useState('');
  const [filterTimeStart, setFilterTimeStart] = useState('');
  const [filterDateStop, setFilterDateStop] = useState('');
  const [filterTimeStop, setFilterTimeStop] = useState('');
  //!TempFiltering for send the modal after click on done
  const [tempFilterDistance, setTempFilterDistance] = useState(filterDistance);
  const [tempFilterHourlyRate, setTempFilterHourlyRate] = useState(filterHourlyRate);
  const [tempFilterRole, setTempFilterRole] = useState(filterRole);
  const [tempFilterDateStart, setTempFilterDateStart] = useState(filterDdateStart);
  const [tempFilterTimeStart, setTempFilterTimeStart] = useState(filterTimeStart);
  const [tempfilterDateStop, setTempFilterDateStop] = useState(filterDateStop);
  const [tempFilterTimeStop, setTempFilterTimeStop] = useState(filterTimeStop);

  // Create state variable for the modal
  const [showModal, setShowModal] = useState(false);

  // Apply all filters
  const filteredAvailabilities = availabilityss.filter(
    (availability) =>
      availability?.userId !== userId &&
      (!filterHourlyRate || availability?.payment >= filterHourlyRate) &&
      (!filterDistance || availability?.distanceInKilometers >= filterDistance) &&
      (!filterRole || availability.role === filterRole) &&
      (!filterDdateStart || availability?.dateStart >= filterDdateStart) &&
      (!filterDateStop || availability?.dateStop >= filterDateStop) &&
      (!filterTimeStart || availability?.start >= filterTimeStart) &&
      (!filterTimeStop || availability?.stop >= filterTimeStop)
  );

  return (
    <StyledHome>
      <IonContent>
        <div className="card-stack-container">
          <IonButton onClick={() => setShowModal(true)} className="filter-button" fill="clear">
            <IonIcon icon={optionsOutline} color="light" size="large" />
          </IonButton>
          {filteredAvailabilities.length > 0 ? (
            filteredAvailabilities.map((availability, index) => (
              <ProfileCard
              key={index} // Use the array index as the key
              availability={availability}
              distance={availability.distanceInKilometers}
              />
            ))
          ) : (
            <div>
              <IonLabel className="noavila">No availability found</IonLabel>
              <img src={emptyStateImage} alt="No availability found" />
            </div>
          )}
        </div>

        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)} className="filter">
          <Filtering
            filterDistance={tempFilterDistance}
            setFilterDistance={setTempFilterDistance}
            filterHourlyRate={tempFilterHourlyRate}
            setFilterHourlyRate={setTempFilterHourlyRate}
            filterRole={tempFilterRole}
            setFilterRole={setTempFilterRole}
            filterDdateStart={tempFilterDateStart}
            setFilterDateStart={setTempFilterDateStart}
            filterDateStop={tempfilterDateStop}
            setFilterDateStop={setTempFilterDateStop}
            setFilterTimeStart={setTempFilterTimeStart}
            setFilterTimeStop={setTempFilterTimeStop}
          />
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <IonButton
              className="close"
              onClick={() => {
                setFilterDistance(tempFilterDistance);
                setFilterHourlyRate(tempFilterHourlyRate);
                setFilterRole(tempFilterRole);
                setFilterDateStart(tempFilterDateStart);
                setFilterTimeStart(tempFilterTimeStart);
                setFilterDateStop(tempfilterDateStop);
                setFilterTimeStop(tempFilterTimeStop);
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
