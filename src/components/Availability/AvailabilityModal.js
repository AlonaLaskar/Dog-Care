import React, { useEffect } from 'react';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonContent, IonList, IonItem, IonAvatar, IonImg, IonIcon, IonButton, IonText } from '@ionic/react';
import { locationOutline, bodyOutline } from 'ionicons/icons';
import PropTypes from 'prop-types';
const AvailabilityModal = ({ user, handleApproval, showModal, setShowModal }) => {

    useEffect(() => {
      // This effect runs when the showModal prop changes. It dismisses the modal when showModal is false.
      if (!showModal) {
        dismiss();
      }
    }, [showModal]);
  
    function dismiss() {
      setShowModal(false);
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
            <IonItem key={user.id} style={{ /* Styles for the item */ }}>
              <IonAvatar slot="start" style={{ /* Styles for the avatar */ }}>
                <IonImg src={user.avatar} />
              </IonAvatar>
              <IonText>
                <h2>{user.fullName}</h2>
                <IonIcon icon={locationOutline} />
                {user.address}
                <p>
                  <IonIcon icon={bodyOutline} />
                  {user.aboutMe}
                </p>
              </IonText>
              <div className="buttons">
                <IonButton
                  className="approvedButton"
                  color="success"
                  fill="outline"
                  onClick={() => handleApproval(user.id, true)}
                >
                  Approved
                </IonButton>
                <IonButton
                  className="notApprovedButton"
                  color="danger"
                  fill="outline"
                  onClick={() => handleApproval(user.id, false)}
                >
                  Not Approved
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
    user: PropTypes.any,
    handleApproval: PropTypes.any,
    showModal: PropTypes.any,
    setShowModal: PropTypes.any
    };