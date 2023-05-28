//!Ionic
import { IonCard, IonCardTitle, IonIcon, IonText, IonButton } from '@ionic/react';
import { calendarNumberOutline, alarmOutline, cashOutline } from 'ionicons/icons';
//!others
import { useParams,Link } from 'react-router-dom';
import AuthContext from 'providers/AuthContext';
//!style
import SteledSendRequestMassage from './SteledSendRequestMassage';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { doc } from 'firebase/firestore';
import { db } from '../../../../../src/firebase';
import {PropTypes} from 'prop-types';


const SendRequestMassage = () => {
  const { id } = useParams()||{}; // Get id from route params

  const q = doc(db, 'availability', id);
  const [availability, isLoading] = useDocumentData(q);

  console.log(availability);
  

  return (
    <SteledSendRequestMassage>
      <div className="contener">
        <h1> Your request was sent!</h1>
        <IonCard>
          <IonCardTitle> Your schedule request is waiting for approval</IonCardTitle>
          <div className="details">
            <div className="date">
              <IonText color="primary">
                <IonIcon icon={calendarNumberOutline} />
                {availability?.dateStart} - {availability?.dateStop}
              </IonText>
            </div>

            <div className="date">
              <IonText color="primary">
                <IonIcon icon={alarmOutline} />
                {availability?.start} - {availability?.stop}
              </IonText>
            </div>

            <div className="date">
              <IonText color="primary">
                <IonIcon icon={cashOutline} />
                {availability?.payment}₪ Nis(cash)
              </IonText>
            </div>

            <div className="button">

      <IonButton color="primary" expand="block" routerLink={`/my/home/${availability?.availabilityId}`}>
      Go to Service
      </IonButton>

            </div>
          </div>
        </IonCard>
        <div className="massege">
          <span>
            Your request has been successfully sent.
            <br />
            We will send you a message when a suitable {availability?.role} is found.
            <br />
            As soon as the {availability?.role} contacts you, you can establish contact by phone call or through a
            WhatsApp message. It is recommended to confirm the {availability?.role} only after an introductory meeting
            or a phone call.
          </span>
        </div>
      </div>
    </SteledSendRequestMassage>
  );
};

export default SendRequestMassage;
SendRequestMassage.propTypes = {
  id: PropTypes.string.isRequired
};