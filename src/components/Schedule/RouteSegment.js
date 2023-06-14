import React, { useState, useEffect } from 'react';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import PeopleULike from './PeopleULike';
import JobSearch from './JobSearch';
import { useavAilabilitys } from '../../hook/availabilityHook';
import AvailabilityList from '../Availability/AvailabilityList';
import { getAllSwipesData } from '../../hook/swips';

const RouteSegment = () => {
  const [selectedSegment, setSelectedSegment] = useState('');
  const [swipesData, setSwipesData] = useState([]);
  const { availabilitys, isLoading } = useavAilabilitys();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await getAllSwipesData();
      setSwipesData(data);
    } catch (error) {
      console.error('Error fetching swipes data:', error);
    }
  }





  const handleSegmentChange = (event) => {
    setSelectedSegment(event.detail.value);
  };
  
  if (isLoading) return 'Loading...';
  

  return (
    <>
      <IonSegment onIonChange={handleSegmentChange} value={selectedSegment}>
        <IonSegmentButton value='PeopleULike' >
            <IonLabel>You like</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value='AvailabilityList' >
            <IonLabel>Availability List</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value='JobSearch'  >
        <IonLabel>Job application</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      {selectedSegment === 'PeopleULike' && <PeopleULike swipesData={swipesData} />}
      {selectedSegment === 'AvailabilityList' && <AvailabilityList availabilitys={availabilitys} />}
      {selectedSegment === 'JobSearch' && <JobSearch />}
    </>
  );
};

export default RouteSegment ;
