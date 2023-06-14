import React, { useEffect } from 'react';
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonContent,
  IonList,
  IonItem,
  IonAvatar,
  IonImg,
  IonIcon,
  IonButton,
  IonText
} from '@ionic/react';
import { locationOutline, bodyOutline, callOutline, logoWhatsapp } from 'ionicons/icons';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';

const AvailabilityModal = ({ user, showModal, setShowModal }) => {
  useEffect(() => {
    // This effect runs when the showModal prop changes. It dismisses the modal when showModal is false.
    if (!showModal) {
      dismiss();
    }
  }, [showModal]);

  function dismiss() {
    setShowModal(false);
  }

  function handleWhatsApp(userTel) {
    const { PhoneNumberUtil } = require('google-libphonenumber');
    const phoneUtil = PhoneNumberUtil.getInstance();

    const phoneNumber = phoneUtil.parse(userTel, 'IL'); // IL is the default region (israel)
    const countryCode = phoneNumber.getCountryCode();
    console.log(countryCode); // Outputs: 971
    console.log(phoneNumber.getNationalNumber()); // Outputs: 501234567

    const whatsappURL = `https://wa.me/${countryCode}${phoneNumber.getNationalNumber()}`;
    console.log(whatsappURL);
    window.open(whatsappURL, '_blank');
  }

  function handleCall(userTel) {
    console.log(`Initiating call with phone number: ${userTel}`);

    if (isMobile) {
      console.log('Mobile device detected, initiating call');
      window.location.href = `tel:${userTel}`; // This initiates a phone call on capable devices
    } else {
      alert(`The number is: ${userTel}`);
    }
  }
  return (
    <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Interested in your service</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={dismiss}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {user.map((user) => (
            <IonItem
              key={user.id}
              style={
                {
                  /* Styles for the item */
                }
              }
            >
              <IonAvatar slot="start">
                <IonImg src={user.avatar} />
              </IonAvatar>
              <IonText>
                <h2>{user.fullName}</h2>
                <IonIcon icon={locationOutline} />
                <span>{user.location}</span>
                <p>
                  <IonIcon icon={bodyOutline} />
                  {user.aboutMe}
                </p>
              </IonText>
              <div className="buttons">
                <IonButton
                  className="whatsappButton"
                  fill="clear"
                  onClick={() => handleWhatsApp(user.tel)}
                  style={{
                    width: '60px',
                    height: '60px',
                    bottom: '40px',
                    right: '40px',
                    background: '#25d366',
                    borderRadius: '50px',
                    textAlign: 'center'
                  }}
                >
                  <IonIcon icon={logoWhatsapp} size="large" style={{ color: '#fff' }} />
                </IonButton>
                <IonButton
                  className="callButton"
                  style={{
                    width: '60px',
                    height: '60px',
                    bottom: '40px',
                    right: '40px',
                    background: '#8ECAE6',
                    borderRadius: '50px',
                    textAlign: 'center'
                  }}
                  fill="clear"
                  onClick={() => handleCall(user.tel)}
                >
                  <IonIcon icon={callOutline} size="large" style={{ color: '#fff' }} />
                </IonButton>
              </div>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonModal>
  );
};

export default AvailabilityModal;

AvailabilityModal.propTypes = {
  user: PropTypes.array,
  handleApproval: PropTypes.func,
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func
};
