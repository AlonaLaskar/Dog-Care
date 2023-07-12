import React, { useEffect, useState, useContext } from 'react';
import { IonCard, IonCardContent, IonIcon, IonImg, IonText } from '@ionic/react';
import { heart, closeOutline, locationOutline, alertCircleOutline, calendarNumberOutline, alarmOutline, walletOutline } from 'ionicons/icons';
import PropTypes from 'prop-types';
import AuthContext from 'providers/AuthContext';
import StylesProfileCard from './StylesProfileCard';
import { gestureInit } from './gestureInit';
import { getUserData } from '../../hook/users';

const ProfileCard = (props) => {
  const { userId } = useContext(AuthContext) || {};

  const availability = props.availability;
  const userId1 = props.availability.userId;
  const availabilityId = props.availability.availabilityId;

  const [swipeDirection, setSwipeDirection] = useState(null);
  const ref = React.useRef(null);
  const card = ref.current;

  useEffect(() => {
    gestureInit(card, setSwipeDirection, availabilityId, userId1, userId);
  }, [card, setSwipeDirection, availabilityId, userId1]);

  if(props.distance === undefined){
    return;
  }
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserData(availabilityId, userId1, (data) => {
      setUserData(data);
    });
  }, [availabilityId]);

  const dob = new Date(userData?.birthDate);
  const ageInMs = Date.now() - dob.getTime();
  const ageInYears = new Date(ageInMs).getFullYear() - 1970;

  return (
    <StylesProfileCard>
      <div key={availabilityId}>
        {availability?.role === 'Dog-Sitter' ? <h3> I’m a Dog Sitter</h3> : <h3> I’m a Dog Walker </h3>}
        <IonCard ref={ref}>
          <IonCardContent>
            <div className="image-container">
              <IonImg src={userData?.avatar} />
            </div>
            <div className="details-container">
              <IonText className="name">
                {userData?.fullName}, {ageInYears}
              </IonText>
              <IonText className="address">
                <IonIcon icon={locationOutline} />
                {props?.distance} km from your location
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

              {availability?.role === 'Dog-walker' ? (
                <IonText className="price">
                  <IonIcon icon={walletOutline} />
                  {`${availability?.payment}₪ for a walk with your dog `}
                </IonText>
              ) : (
                <IonText className="price">
                  <IonIcon icon={walletOutline} />
                  {`${availability?.payment}₪ for keeping your dog `}
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

ProfileCard.propTypes = {
  availability: PropTypes.object.isRequired,
  distance: PropTypes.string
};
export default ProfileCard;
