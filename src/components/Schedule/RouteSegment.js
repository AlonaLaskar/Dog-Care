import React, { useState } from 'react';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import PeopleULike from './PeopleULike';
import JobSearch from './JobSearch';
import { useavAilabilitys } from '../../hook/availabilityHook';
import AvailabilityList from '../Availability/AvailabilityList';


const RouteSegment = () => {
  const [selectedSegment, setSelectedSegment] = useState('');

  const handleSegmentChange = (event) => {
    setSelectedSegment(event.detail.value);
  };
  
  const { availabilitys, isLoading } = useavAilabilitys();
  if (isLoading) return 'Loading...';
  console.log('availabilitys IN RouteSegment ', availabilitys);


  return (
    <>
      <IonSegment onIonChange={handleSegmentChange} value={selectedSegment}>
        <IonSegmentButton value="PeopleULike" >
            <IonLabel>You like</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="AvailabilityList" >
            <IonLabel>Availability List</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="JobSearch"  >
        <IonLabel>Job application</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      {selectedSegment === 'PeopleULike' && <PeopleULike />}
      {selectedSegment === 'AvailabilityList' && <AvailabilityList availabilitys={availabilitys} />}
      {selectedSegment === 'JobSearch' && <JobSearch />}
    </>
  );
};

export default RouteSegment ;
