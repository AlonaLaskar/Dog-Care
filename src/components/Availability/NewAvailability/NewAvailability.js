import React from 'react';
import StyledNewAvailability from './StyledNewAvailability';
import { IonCard, IonCheckbox, IonIcon, IonText, IonButton, IonCardSubtitle, IonLabel } from '@ionic/react';
import {
  calendarNumberOutline,
  alarmOutline,
  cashOutline,
  alertCircleOutline,
  locationOutline,
  bodyOutline
} from 'ionicons/icons';
// import PropTypes from 'prop-types';
import { trashOutline, createOutline } from 'ionicons/icons';
import PropTypes from 'prop-types';
import { useDeleteAvailability, useEditAvailability } from 'hook/availabilityHook';
import { useHistory } from 'react-router-dom';
import EditAvilabilty from 'components/Availability/EditAvilabilty';
import { useRef, useEffect, useState } from 'react';

import { db } from '../../../firebase';
import { collection, query, where } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { doc, getDoc } from 'firebase/firestore';
import AvailabilityModal from '../../Availability/AvailabilityModal';

export default function NewAvailability({ availability }) {
  
  //modle settings

  const q = query(collection(db, 'swipes'), where('availabilityId', '==', availability.availabilityId));
  const [UserSwipesRith] = useCollectionData(q);
  console.log('UserSwipesRith', UserSwipesRith);
  const peopleYouLike = UserSwipesRith?.[0]?.rightSwipes;
  console.log('peopleYouLike', peopleYouLike);

  const [showModal, setShowModal] = useState(false);

  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const newUsers = [];
      if (peopleYouLike && peopleYouLike.length > 0) {
        for (const uid of peopleYouLike) {
          const docRef = doc(db, 'users', uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            newUsers.push(data);
          } else {
            console.log('No such document!');
          }
        }
      }
      setUser(newUsers);
    }
    fetchData();
  }, [peopleYouLike]);

  console.log('user', user);

  const history = useHistory();
  const { deleteAvailability, isLoading: deleteLoading } = useDeleteAvailability(availability.availabilityId);
  const { editAvailability, isLoading: editLoading } = useEditAvailability(availability.availabilityId);

  const handleApproval = (userId, isApproved) => {
    // Handle the approval logic here
    console.log(`User ID: ${userId}, Approved: ${isApproved}`);
  };

  const handleEditAvailability = () => {
    history.push(`/my/editAvilabilty/${availability.availabilityId}`);
  };



  return (
    <StyledNewAvailability>
      <>
        <IonCard>
          {/* <h3>{title}</h3> */}
          <div className="role">
            <IonText color="primary">
              <IonIcon icon={alertCircleOutline} />
              {availability.role}
            </IonText>
          </div>

          <div className="date">
            <IonText>
              <IonIcon icon={calendarNumberOutline} />
              {availability.dateStart}
              <span> - </span>
              {availability.dateStop}
            </IonText>
          </div>
          <div className="time">
            <IonText>
              <IonIcon icon={alarmOutline} />
              {availability.start} <span> - </span> {availability.stop}
            </IonText>
          </div>
          <div className="location">
            <IonText color="primary">
              <IonIcon icon={locationOutline} />
              {availability.location}
            </IonText>
          </div>

          <div className="payment">
            <IonText>
              <IonIcon icon={cashOutline} />
              {availability.payment}₪ (cash)
            </IonText>
          </div>
          <div className="IsAccept">
            <IonCheckbox slot="end" />
          </div>
          <div className="buttons">
            <IonButton
              className="deleteButton"
              color="danger"
              fill="clear"
              onClick={deleteAvailability}
              isLoading={deleteLoading}
              isRound
            >
              <IonIcon icon={trashOutline} />
            </IonButton>
            <IonButton
              className="editButton"
              color="warning"
              fill="clear"
              isRound
              onClick={handleEditAvailability}
              disabled={editLoading} // Disable the edit button while the edit operation is in progress
            >
              <IonIcon icon={createOutline} />
            </IonButton>
            <IonButton 
        className="SeeRequests" 
        fill="clear" 
        isRound 
        onClick={() => setShowModal(true)} // Modify this button's onClick to set showModal to true when clicked
      >
        {user.length} See Requests
      </IonButton>
      <AvailabilityModal user={user} handleApproval={handleApproval} showModal={showModal} setShowModal={setShowModal} />
          </div>
        </IonCard>
      </>
    </StyledNewAvailability>
  );
}

NewAvailability.propTypes = {
  availability: PropTypes.any
};
