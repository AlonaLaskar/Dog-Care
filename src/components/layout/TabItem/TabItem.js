import propTypes from 'prop-types';
import { IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import * as icons from 'ionicons/icons';

const TabItem = ({ tab, href, icon, label }) => {
  return (
    <IonTabButton tab={tab} href={href}>
      <IonIcon icon={icons[icon]} />
      <IonLabel>{label}</IonLabel>
    </IonTabButton>
  );
};

TabItem.propTypes = {
  tab: propTypes.string.isRequired,
  href: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
  label: propTypes.string.isRequired
};
export default TabItem;
