import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';
import StyledHome from './StyledHome';
import ProfileCard from 'components/ProfileCard/ProfileCard';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, doc } from 'firebase/firestore';
import { db, auth } from '../../firebase';
import ActionButton from 'components/ProfileCard/ActionButton/ActionButton';

const Home = () => {
  const [animateUnmatchButton, setAnimateUnmatchButton] = useState(false);
  const [animateMatchButton, setAnimateMatchButton] = useState(false);


  function useavAilabilitys() {
    const [ailabilitys, isLoading] = useCollectionData(collection(db, 'availability'));
    return { ailabilitys, isLoading };
  }
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

  const { ailabilitys, isLoading } = useavAilabilitys();
  console.log(ailabilitys);

  // Check if availability data is still loading or if it's not an array
  if (isLoading || !Array.isArray(ailabilitys)) {
    return <div>Loading...</div>; // You can display a loading indicator here
  }

  return (
    <StyledHome>
    <IonHeader>
      {/* Add the IonSegment component here */}
      <IonSegment onIonChange={e => setSelectedRole(e.detail.value)}>
        <IonSegmentButton value="Dog-Sitter">
          <IonLabel>Dog Sitter</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="Dog-walker">
          <IonLabel>Dog Walker</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </IonHeader>
    <IonContent fullscreen>
      <div className="card-stack-container">
        {/* Filter the ailabilitys based on the selected role */}
        {ailabilitys.filter(availability => availability.role === selectedRole)
        .map((availability) => (
          <ProfileCard
            availability={availability} 
            onMatch={ProfileEvents.onMatch}
            onUnmatch={ProfileEvents.onUnmatch}
            onReset={ProfileEvents.onReset}
            key={availability.id} 
          />
        ))}
      </div>
      <ActionButton
        {...{
          animateMatchButton,
          animateUnmatchButton
        }}
      />
    </IonContent>
  </StyledHome>
  );
};

export default Home;
