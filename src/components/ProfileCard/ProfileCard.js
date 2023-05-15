import React, { useEffect } from 'react';
import StylesProfileCard from './StylesProfileCard';
import { IonCard, IonImg, IonText, createGesture, IonIcon, IonCardTitle, IonCardHeader } from '@ionic/react';
import { locationOutline, walletOutline } from 'ionicons/icons';
import PropsTypes from 'prop-types';

import AuthContext from 'providers/AuthContext';
import { useContext } from 'react';
import { saveRightSwipe } from 'hook/users';



const ProfileCard = (props) => {

  const { userId}= useContext(AuthContext) || {};


  const ref = React.useRef(null);
  useEffect(() => {
    gestureInit();
  }, []);

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
            saveRightSwipe(userId, props.id);

          } else {
            props.onUnmatch();
          }
        },
        onEnd: (detail) => {
          const windowWidth = window.innerWidth;
          props.onReset();
          card.style.transition = '0.5s cubic-bezier(0.175,0.885,0.32,1.275)'
          if (detail.deltaX > windowWidth / 2) {
            card.style.transform = `translateX(${windowWidth*1.5}px)`;
          } else if (detail.deltaX < -windowWidth / 2) {
            card.style.transform = `translateX(-${windowWidth*1.5}px)`;
          } else {
            card.style.transform = '';
          }
        }
      });
      gesture.enable();
    }
  };
  //!get the age
  const dob = new Date(props.birthDate);
  const ageInMs = Date.now() - dob.getTime();
  const ageInYears = new Date(ageInMs).getFullYear() - 1970;

  return (
    <StylesProfileCard>
      <div ref={ref}>
        <IonCard>
          <IonCardHeader >
          {props.pageStatus === 'Dog-walker' ? (
            <IonCardTitle> Walk With Me </IonCardTitle>
          ) : (
            <IonCardTitle>Sleep with me</IonCardTitle>
          )}
          </IonCardHeader>

          <div className="card-container">
            <div className="image-container">
              <IonImg src={props.avatar} />
            </div>
            <div className="details-container">
              <IonText className="name">
                {props.fullName}, {ageInYears}
              </IonText>{' '}
              <br />
              <IonText className="address">
                <IonIcon icon={locationOutline} />
                {props.city},Israel
              </IonText>
              <IonText className="bio">
                <p>{props.aboutMe}</p>
              </IonText>
              {props.pageStatus === 'Dog-walker' ? (
                <IonText className="price">
                  <IonIcon icon={walletOutline} />
                  {`${props.payment}₪ per hour to walk your dog `}
                </IonText>
              ) : (
                <IonText className="price">
                  <IonIcon icon={walletOutline} />
                  {`${props.payment}₪ per hour to keepin your dog `}
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

ProfileCard.defaultProps = {
  onReset: () => {} // Add a default value for onReset prop
};

ProfileCard.propTypes = {
  avatar: PropsTypes.string.isRequired,
  id: PropsTypes.string.isRequired,
  fullName: PropsTypes.string.isRequired,
  city: PropsTypes.string.isRequired,
  birthDate: PropsTypes.string.isRequired,
  payment: PropsTypes.number.isRequired,
  pageStatus: PropsTypes.string.isRequired,
  aboutMe: PropsTypes.string.isRequired,
  onMatch: PropsTypes.func.isRequired,
  onUnmatch: PropsTypes.func.isRequired,
  onReset: PropsTypes.func
};
