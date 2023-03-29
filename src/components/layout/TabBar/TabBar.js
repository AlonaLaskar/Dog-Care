import { IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import * as icons from 'ionicons/icons';

const TabBar = ({ tab, href, icon, label }) => {
  return (
    <IonTabButton tab={tab} href={href}>
      <IonIcon icon={icons[icon]} />
      <IonLabel>{label}</IonLabel>
    </IonTabButton>
  );
};

export default TabBar;
