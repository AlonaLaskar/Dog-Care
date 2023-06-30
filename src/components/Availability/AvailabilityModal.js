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
    const phoneNumberWithoutZero = userTel.slice(1); // Remove the first character (0)
    const whatsappURL = `https://wa.me/972${phoneNumberWithoutZero}`;
    window.open(whatsappURL, '_blank');
  }

  async function handleCall(userTel) {
    console.log(`Initiating call with phone number: ${userTel}`);
  
    if (isMobile) {
  console.log('Mobile device detected, using Call Number plugin');  
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
        <IonList className="service-request-modal">
          {user.map((user) => (
            <IonItem lines='none' key={user.id} style={{ /* Styles for the item */ }}>
              <IonAvatar slot="start" style={{ /* Styles for the avatar */ }}>
                <IonImg src={user.avatar} />
              </IonAvatar>
              <IonText>
                <h2>{user.fullName}</h2>
                <IonIcon icon={locationOutline} />
                {user.location}
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
                >
                  <IonIcon icon={logoWhatsapp} />
                </IonButton>
                <IonButton
                  className="callButton"
                  fill="clear"
                  onClick={() => handleCall(user.tel)}
                >
                  <IonIcon icon={callOutline} />
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
