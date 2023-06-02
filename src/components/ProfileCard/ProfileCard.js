import React, { useEffect, useState } from 'react';
import StylesProfileCard from './StylesProfileCard';
import { IonCard, IonImg, IonText, createGesture, IonIcon, IonCardTitle, IonCardHeader } from '@ionic/react';
import {
  locationOutline,
  walletOutline,
  calendarNumberOutline,
  alarmOutline,
  alertCircleOutline
} from 'ionicons/icons';
import PropTypes from 'prop-types';
import { doc, getDoc } from 'firebase/firestore';
import {  db } from '../../firebase';
import { useDocumentData } from 'react-firebase-hooks/firestore';

import { saveRightSwipe } from '../../hook/availabilityHook';
import AuthContext from 'providers/AuthContext';
import { useContext } from 'react';

const ProfileCard = (props) => {
  const { userId } = useContext(AuthContext) || {};
 

  const ref = React.useRef(null);
  useEffect(() => {
    gestureInit();
  });
  const gestureInit = () => {
    const card = ref.current;
    if (card) {
      const gesture = createGesture({
        el: card,
        gestureName: 'card-swipe',
        onMove: (detail) => {
          card.style.transform = `translateX(${detail.deltaX}px) rotate(${detail.deltaX / 20}deg)`;
          if (detail.deltaX > 0) {
            props.onMatch();

            saveRightSwipe(props.availability.availabilityId, props.availability.userId,userId);
          } else {
            props.onUnmatch();
            
          }
        },
        onEnd: (detail) => {
          const windowWidth = window.innerWidth;
          props.onReset();
          if (detail.deltaX > windowWidth / 2) {
            saveRightSwipe(props.availability.availabilityId, userId);
            props.onMatch();
            
            
            card.style.transform = `translateX(${windowWidth}px)`;
          } else if (detail.deltaX < -windowWidth / 2) {
            card.style.transform = `translateX(-${windowWidth}px)`;
          } else {
            card.style.transform = 'translateX(0px)';
          }
        }
      });
      gesture.enable();
    }
  };
  


  const availabilityId = props.availability.availabilityId;
  const userId1 = props.availability.userId;
  
  const [userData, setUserData] = useState(null); // State to store the retrieved user data

  async function getUserData(availabilityId) {

    const availabilityRef = doc(db, 'availability', availabilityId);
    const availabilitySnapshot = await getDoc(availabilityRef);
    if (availabilitySnapshot.exists()) {
      const userRef = doc(db, 'users', userId1);
      const userSnapshot = await getDoc(userRef);
      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        setUserData(userData); // Update the state with the retrieved user data
        console.log(userData);
      } else {
        console.log('User document does not exist');
      }
    } else {
      console.log('Availability document does not exist');
    }
  }


  useEffect(() => {
    getUserData(availabilityId);
  }, [availabilityId]);

  const q = doc(db, 'availability', availabilityId);
  const [availability, isLoadingAvailability] = useDocumentData(q);

  if (isLoadingAvailability) {
    // Handle the loading state, e.g., display a loading spinner
    return <div>Loading...</div>;
  }

  if (!availability) {
    // Handle the case when availability data is not found or undefined
    return <div>No availability data found.</div>;
  }

  // // const dob = moment(userData.birthDate, 'DD/MM/YYYY').toDate();
  // const ageInMs = Date.now() - availability.birthDate.getTime();
  // const ageInYears = new Date(ageInMs).getFullYear() - 1970;

  return (
    <StylesProfileCard>
      <div>
        <IonCard ref={ref}>
          <IonCardHeader>
            {availability.role === 'Dog-walker' ? (
              <IonCardTitle>Walk With Me</IonCardTitle>
            ) : (
              <IonCardTitle>Sleep with me</IonCardTitle>
            )}
          </IonCardHeader>

          <div className="card-container">
            <div className="image-container">
              <IonImg src={userData?.avatar} />
            </div>
            <div className="details-container">
              <IonText className="name">
                {userData?.fullName}
                {/* ,{ageInYears} */}
              </IonText>
              <br />
              <IonText className="address">
                <IonIcon icon={locationOutline} />
                {userData?.address}, Israel
              </IonText>
              <IonText className="bio">
                <p>{availability?.aboutMe}</p>
              </IonText>
              <div className="role">
                <IonText>
                  <IonIcon icon={alertCircleOutline} />
                  {availability?.role}
                </IonText>
              </div>
              <div className="date">
                <IonText>
                  <IonIcon icon={calendarNumberOutline} />
                  {availability?.dateStart}
                  <span> - </span>
                  {availability?.dateStop}
                </IonText>
              </div>
              <div className="time">
                <IonText>
                  <IonIcon icon={alarmOutline} />
                  {availability?.start} <span> - </span> {availability?.stop}
                </IonText>
              </div>
              <div className="location">
                <IonText color="primary">
                  <IonIcon icon={locationOutline} />
                  {availability?.location}
                </IonText>
              </div>

              {availability?.role === 'Dog-walker' ? (
                <IonText className="price">
                  <IonIcon icon={walletOutline} />
                  {`${availability?.payment}₪ per hour to walk your dog `}
                </IonText>
              ) : (
                <IonText className="price">
                  <IonIcon icon={walletOutline} />
                  {`${availability?.payment}₪ per hour to keep your dog `}
                </IonText>
              )}
            </div>
          </div>
        </IonCard>
      </div>
    </StylesProfileCard>
  );
};

export default ProfileCard;
ProfileCard.propTypes = {
  availability: PropTypes.object.isRequired,
  onMatch: PropTypes.func.isRequired,
  onUnmatch: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired

};
