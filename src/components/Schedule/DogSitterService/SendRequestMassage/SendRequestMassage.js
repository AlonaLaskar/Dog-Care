import SteledSendRequestMassage from './SteledSendRequestMassage';
import { IonCard, IonCardTitle } from '@ionic/react';
const SendRequestMassage = () => {
    return (
        <SteledSendRequestMassage>
            <IonCard>
                <IonCardTitle>
                    Your request was sent!
                </IonCardTitle>
                </IonCard>
        </SteledSendRequestMassage>
    );
};
    export default SendRequestMassage;