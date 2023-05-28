
import React from 'react' ;
import StyledNewAvailability from './StyledNewAvailability' ;
import { IonCard, IonCheckbox, IonIcon, IonText,IonButton } from '@ionic/react';
import { calendarNumberOutline, alarmOutline, cashOutline } from 'ionicons/icons';
// import PropTypes from 'prop-types';
import { trashOutline, createOutline } from 'ionicons/icons';
import PropTypes from 'prop-types';
import {useDeleteAvailability} from 'hook/availabilityHook';

export default function NewAvailability({ availability }) {
    const { deleteAvailability, isLoading: deleteLoading } = useDeleteAvailability(availability.availabilityId);

    return (
        <StyledNewAvailability>
             <IonCard >
            {/* <h3>{title}</h3> */}
          <div className="date">
          <IonText >
              <IonIcon icon={calendarNumberOutline} />
              {availability.dateStart}<span> - </span>{availability.dateStop}
            </IonText>
          </div>
          <div className="time">
          <IonText >
              <IonIcon icon={alarmOutline} />
              {availability.start} <span> -  </span>  {availability.stop}
            </IonText>
          </div>
          <div className="payment">
            <IonText >
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
              onClick={deleteAvailability} isLoading={deleteLoading} 
              isRound
            >
              <IonIcon icon={trashOutline} />
            </IonButton>
            <IonButton className="editButton" color='warning' fill="clear" isRound>
              <IonIcon icon={createOutline} />
            </IonButton>
            <IonButton className="SeeRequests"  fill="clear" isRound>
              See Requests
            </IonButton>

          </div>

        </IonCard>

        </StyledNewAvailability>
    )
}


NewAvailability.propTypes = {
    availability: PropTypes.any
    };