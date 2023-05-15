import React, { useState } from 'react';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import PeopleULike from './PeopleULike';
import HistoryJob from './HistoryJob';
import JobSearch from './JobSearch';

const RouteSegment = () => {
  const [selectedSegment, setSelectedSegment] = useState('JobSearch');

  const handleSegmentChange = (event) => {
    setSelectedSegment(event.detail.value);
  };

  return (
    <>
      <IonSegment onIonChange={handleSegmentChange} value={selectedSegment}>
        <IonSegmentButton value="PeopleULike" >
            <IonLabel>You like</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="HistoryJob" >
            <IonLabel>HistoryJob</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="JobSearch"  >
        <IonLabel>Job application</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      {selectedSegment === 'PeopleULike' && <PeopleULike />}
      {selectedSegment === 'HistoryJob' && <HistoryJob />}
      {selectedSegment === 'JobSearch' && <JobSearch />}
    </>
  );
};

export default RouteSegment ;
