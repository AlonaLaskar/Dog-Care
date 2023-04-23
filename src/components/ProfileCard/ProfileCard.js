import React, { useState } from 'react';
import { IonCard, IonImg, IonText, IonIcon } from '@ionic/react';
import { cashOutline, pinOutline, micOutline } from 'ionicons/icons';
import StylesProfileCard from './StylesProfileCard';
import PropsTypes from 'prop-types';

const ProfileCard = ({
  avatar,
  fullName,
  address,
  birthDate,
  walkingPrice,
  keepingPrice,
  pageStatus,
  aboutMe,
  onMatch,
  onUnmatch,
  onReset = () => {}
}) => {
  const [cardStyle, setCardStyle] = useState({ transform: 'translateX(0px)' });

  const handleMove = (detail) => {
    setCardStyle({
      transform: `translateX(${detail.deltaX}px) rotate(${detail.deltaX / 20}deg)`
    });
    if (detail.deltaX > 0) {
      onMatch();
    } else {
      onUnmatch();
    }
  };

  const handleEnd = (detail) => {
    const windowWidth = window.innerWidth;
    onReset();
    if (detail.deltaX > windowWidth / 2) {
      setCardStyle({ transform: `translateX(${windowWidth}px)` });
    } else if (detail.deltaX < -windowWidth / 2) {
      setCardStyle({ transform: `translateX(-${windowWidth}px)` });
    } else {
      setCardStyle({ transform: 'translateX(0px)' });
    }
  };

  const dob = new Date(birthDate);
  const ageInMs = Date.now() - dob.getTime();
  const ageInYears = new Date(ageInMs).getFullYear() - 1970;

  return (
    <StylesProfileCard>
      <div style={cardStyle} onPointerMove={handleMove} onPointerUp={handleEnd}>
        <IonCard>
          <div className="card-container">
            <div className="image-container">
              <IonImg src={avatar} />
            </div>

            <div className="details-container">
              <IonText className="name">{`${fullName}, ${ageInYears}`}</IonText> <br />
              <div className="location">
                <IonIcon icon={pinOutline} />
                <IonText className="address">{address}</IonText>
              </div>
              <div className="bip">
                <IonIcon icon={micOutline} />
                <IonText className="bio">{aboutMe}</IonText>
              </div>
              <div className="price">
                <IonIcon icon={cashOutline} />
                <IonText>{`${pageStatus === 'Dog-walker' ? walkingPrice : keepingPrice}₪ per hour to ${
                  pageStatus === 'Dog-walker' ? 'walk' : 'keep'
                } your dog`}</IonText>
              </div>
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
  fullName: PropsTypes.string.isRequired,
  address: PropsTypes.string.isRequired,
  birthDate: PropsTypes.string.isRequired,
  walkingPrice: PropsTypes.number.isRequired,
  keepingPrice: PropsTypes.number.isRequired,
  pageStatus: PropsTypes.string.isRequired,
  aboutMe: PropsTypes.string.isRequired,
  onMatch: PropsTypes.func.isRequired,
  onUnmatch: PropsTypes.func.isRequired,
  onReset: PropsTypes.func
};
