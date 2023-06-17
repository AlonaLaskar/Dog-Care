import React, { useState,useContext} from 'react';
import { IonContent, IonModal, IonButton, IonIcon, IonLabel } from '@ionic/react';
import { db } from '../../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import ProfileCard from 'components/ProfileCard/ProfileCard';
import StyledHome from './StyledHome';
import AuthContext from 'providers/AuthContext';
import Filtering from './Filtering';
import { query, where } from 'firebase/firestore';
import haversineDistance from 'haversine-distance'; // Or any other library for calculating distance between two coordinates
import { Geolocation } from '@capacitor/geolocation';
import { useUser } from '../../hook/users';
import { Client } from '@googlemaps/google-maps-services-js';
import emptyStateImage from '../../assets/emptyStateImage1.jpg';
import { optionsOutline } from 'ionicons/icons';
import { useEffect } from 'react';
import { useAvilabiltys } from '../../hook/availabilityHook';


const Home = () => {
  const { userId } = useContext(AuthContext) || {};
  const { user } = useUser(userId) || {};


  const [availabilityss, setAvailabilityss] = useState([]);

  const [filterDistance, setFilterDistance] = useState(0); // Distance in kilometers
  const [filterHourlyRate, setFilterHourlyRate] = useState(0);
  const [filterRole, setFilterRole] = useState('');

  useEffect(() => {
    const fetchAvailabilityss = async () => {
      const availabilityss = await useAvilabiltys();

      setAvailabilityss(availabilityss);
    };
    fetchAvailabilityss();
  }, []);


console.log('avilabiltyList-in hom', availabilityss);


  

  // Create state variable for the modal
  const [showModal, setShowModal] = useState(false);

  // Apply all filters
  const filteredAvailabilities = availabilityss.filter(
    (availability) =>
      availability.userId !== userId &&
      (!filterHourlyRate || availability.payment >= filterHourlyRate) &&
      // (!filterDistance ||availability.location <= filterDistance) &&
      (!filterRole || availability.role === filterRole)
      );
    console.log('filterDistance', filterDistance);
    console.log('filterHourlyRate', filterHourlyRate);
    console.log('filterRole', filterRole);
    

console.log('filteredAvailabilities -in hom', filteredAvailabilities);
  return (
    <StyledHome>
      <IonContent>
        <div className="card-stack-container">
      <IonButton onClick={() => setShowModal(true)} className="filter-button" fill="clear">
        <IonIcon icon={optionsOutline} color="light" size="large" />
      </IonButton>
          {filteredAvailabilities.length > 0 ? (
            filteredAvailabilities.map((availability) => (
              <ProfileCard
                availability={availability}
                key={availability.availabilityId}
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
            filterDistance={filterDistance}
            setFilterDistance={setFilterDistance}
            filterHourlyRate={filterHourlyRate}
            setFilterHourlyRate={setFilterHourlyRate}
            filterRole={filterRole}
            setFilterRole={setFilterRole}
          />
              <div style={{ textAlign: 'center', marginTop: '16px' }}>
        <IonButton
          className="close"
          onClick={() => setShowModal(false)}
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
