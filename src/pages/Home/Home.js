import React, { useState } from 'react';
import { IonHeader, IonSelect, IonToolbar, IonContent, IonTitle, IonSelectOption } from '@ionic/react';
import StyledHome from './StyledHome';
import ProfileCard from 'components/ProfileCard/ProfileCard';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, doc } from 'firebase/firestore';
import { db, auth } from '../../firebase';
import ActionButton from 'components/ProfileCard/ActionButton/ActionButton';
import { saveRightSwipe } from 'hook/users';
import { useParams } from 'react-router-dom';
import { useDocumentData } from 'react-firebase-hooks/firestore';
const Home = () => {
  const [animateUnmatchButton, setAnimateUnmatchButton] = useState(false);
  const [animateMatchButton, setAnimateMatchButton] = useState(false);


  function useavAilabilitys() {
    const [ailabilitys, isLoading] = useCollectionData(collection(db, 'availability'));
    return { ailabilitys, isLoading };
  }



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
        
      </IonHeader>
      <IonContent fullscreen>
        <div className="card-stack-container">
          {ailabilitys.map((availability) => (
            <ProfileCard
              availability={availability} // Pass the availability ID
              onMatch={ProfileEvents.onMatch}
              onUnmatch={ProfileEvents.onUnmatch}
              onReset={ProfileEvents.onReset}
              key={availability.id} // Add a unique key prop
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
