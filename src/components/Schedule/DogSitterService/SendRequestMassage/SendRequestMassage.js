//!Ionic
import { IonCard, IonCardTitle, IonIcon, IonText, IonButton } from '@ionic/react';
import { calendarNumberOutline, alarmOutline, cashOutline } from 'ionicons/icons';
//!others
import { useUser } from 'hook/users';
import { useContext } from 'react';
import AuthContext from 'providers/AuthContext';
//!style
import SteledSendRequestMassage from './SteledSendRequestMassage';



const SendRequestMassage = () => {
    const { userId } = useContext(AuthContext) || {};
    const { user } = useUser(userId) || {};
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
                {user?.dateStart} - {user?.dateStop}
              </IonText>
            </div>

          <div className="date">
            <IonText color="primary">
              <IonIcon icon={alarmOutline} />
              {user?.start} - {user?.stop}
            </IonText>
          </div>

          <div className="date">
            <IonText color="primary">
              <IonIcon icon={cashOutline} />
                {user?.payment}₪ Nis(cash)
            </IonText>
          </div>

          <div className='button'   >
            <IonButton color="primary" expand="block" href='/my/home' >Go to Service</IonButton>
            </div>
          </div>
        </IonCard>
        <div className="massege">
        <span>
            Your request has been successfully sent.<br />
            We will send you a message when a suitable {user?.role} is found.<br/>
            As soon as the {user?.role} contacts you, you can establish contact by phone call
            or through a WhatsApp message, it is recommended to confirm the {user?.role}  only after an introductory meeting or a phone call.
            </span>
      </div>
        </div>
    </SteledSendRequestMassage>
  );
};
export default SendRequestMassage;
