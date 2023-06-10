import React, { useEffect, useState } from 'react';
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
import { db } from '../../firebase';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { saveRightSwipe } from '../../hook/swips';
import AuthContext from 'providers/AuthContext';
import { useContext } from 'react';
import StylesProfileCard from './StylesProfileCard';

const ProfileCard = (props) => {
  const { userId } = useContext(AuthContext) || {};
  

  
  const ref = React.useRef(null);
  useEffect(() => {
    gestureInit();
  });

  const gestureInit = () => {
    const swipeThreshold = window.innerWidth * 0.5; // Adjust the value as needed

    const card = ref.current;
    if (card) {
      const gesture = createGesture({
        el: card,
        gestureName: 'card-swipe',
        onMove: (detail) => {
          card.style.transform = `translateX(${detail.deltaX}px) rotate(${detail.deltaX / 20}deg)`;
          if (detail.deltaX > 0) {
            props.onMatch();
          if (detail.deltaX > swipeThreshold) {
            card.style.transform = `translateX(${window.innerWidth}px)`;
            saveRightSwipe(props.availability.availabilityId, props.availability.userId, userId);
            
          } 
        }
          else {
            props.onUnmatch();
          }
        },
        onEnd: (detail) => {
          const windowWidth = window.innerWidth;
          if (detail.deltaX > windowWidth - swipeThreshold) {
            props.onMatch();
            saveRightSwipe(props.availability.availabilityId, props.availability.userId, userId);
            card.style.transform = `translateX(${window.innerWidth}px)`;
          } else {
            props.onReset();
            card.style.transform = 'translateX(0px)';
          }
        }
      });
      gesture.enable();
    }
  };

  const availabilityId = props.availability.availabilityId;
  const userId1 = props.availability.userId;

  const [userData, setUserData] = useState(null);

  async function getUserData(availabilityId) {
    const availabilityRef = doc(db, 'availability', availabilityId);
    const availabilitySnapshot = await getDoc(availabilityRef);
    if (availabilitySnapshot.exists()) {
      const userRef = doc(db, 'users', userId1);
      const userSnapshot = await getDoc(userRef);
      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        setUserData(userData);
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
    return <div>Loading...</div>;
  }

  if (!availability) {
    return <div>No availability data found.</div>;
  }

  return (
    <StylesProfileCard>
      <div key={props.availability.id}>
        <IonCard ref={ref}>
          <IonCardHeader>
            {availability.role === 'Dog-Walker' ? (
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

              {availability?.role === 'Dog-Walker' ? (
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
