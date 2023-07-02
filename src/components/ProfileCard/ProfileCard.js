import React, { useEffect, useState, useContext } from 'react';
import { IonCard, IonCardContent, IonIcon, IonImg, IonText, createGesture } from '@ionic/react';
import {
  heart,
  closeOutline,
  locationOutline,
  alertCircleOutline,
  calendarNumberOutline,
  alarmOutline,
  walletOutline
} from 'ionicons/icons';
import PropTypes from 'prop-types';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { saveRightSwipe } from '../../hook/swips';
import AuthContext from 'providers/AuthContext';
import StylesProfileCard from './StylesProfileCard';

const ProfileCard = (props) => {
  const { userId } = useContext(AuthContext) || {};

  const [swipeDirection, setSwipeDirection] = useState(null);

  const ref = React.useRef(null);
  useEffect(() => {
    gestureInit();
  });

  const gestureInit = () => {
    // const swipeThreshold = window.innerWidth * 0.5; // Adjust the value as needed
    const windowWidth = window.innerWidth;

    const card = ref.current;
    if (card) {
      const gesture = createGesture({
        el: card,
        gestureName: 'card-swipe',

        onStart: () => {
          card.style.transition = 'none';
        },
        onMove: (detail) => {
          card.style.transform = `translateX(${detail.deltaX}px) rotate(${detail.deltaX / 20}deg)`;
          if (detail.deltaX > 0) {
            card.classList.add('right'); // add right class
            card.classList.remove('left'); // remove left class
            setSwipeDirection('right');
          } else if (detail.deltaX < 0) {
            card.classList.add('left'); // add left class
            card.classList.remove('right'); // remove right class
            setSwipeDirection('left');
          } else {
            card.classList.remove('left'); // remove left class
            card.classList.remove('right'); // remove right class
            setSwipeDirection(null);
          }
        },
        onEnd: (detail) => {
          card.style.transition = '0.3s ease-out';
          if (detail.deltaX > windowWidth / 2) {
            card.style.transform = `translateX(${windowWidth * 1.5}px)`;
            saveRightSwipe(props.availability.availabilityId, props.availability.userId, userId);
            setSwipeDirection(null);
          } else if (detail.deltaX < -windowWidth / 2) {
            card.style.transform = `translateX(-${windowWidth * 1.5}px)`;
            setSwipeDirection(null);
          } else {
            card.style.transform = '';
            card.classList.remove('left'); // remove left class
            card.classList.remove('right'); // remove right class
            setSwipeDirection(null);
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
    return ;
  }
  const dob = new Date(userData?.birthDate);
  const ageInMs = Date.now() - dob.getTime();
  const ageInYears = new Date(ageInMs).getFullYear() - 1970;


  return (
    <StylesProfileCard>
      <div key={props.availability.id}>
        {availability.role === 'Dog-Sitter' ? <h3> I’m a dog sitter</h3> : <h3> I’m a dog walker </h3>}
        <IonCard ref={ref}>
          <IonCardContent>
            <div className="image-container">
              <IonImg src={userData?.avatar} />
            </div>
            <div className="details-container">
              <IonText className="name">
                {userData?.fullName}
                ,{ageInYears}
              </IonText>
              <IonText className="address">
                <IonIcon icon={locationOutline} />
                {props.distance} km from your location
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
                <IonText>
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
            <div className={`swipe-indicator ${swipeDirection}`}>
              {swipeDirection === 'right' && <IonIcon icon={heart} />}
              {swipeDirection === 'left' && <IonIcon icon={closeOutline} />}
            </div>
          </IonCardContent>
        </IonCard>
      </div>
    </StylesProfileCard>
  );
};

export default ProfileCard;

ProfileCard.propTypes = {
  availability: PropTypes.object.isRequired,
  distance: PropTypes.string.isRequired
};
