import StyledFooter from './StyledFooter';
import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonFooter } from '@ionic/react';
import { person, add, square, home,create,timer} from 'ionicons/icons';

const Footer = () => {
  const links = [
    {
      icon: home,
      label: 'דף הבית'
    },
    {
      icon: square,
      label: 'התחברות'
    },
    {
      icon: add,
      label: 'הרשמה'
    },
    {
      icon: person,
      label: 'פרופיל'
    },

    {
    icon: create,
    label: 'יצירת פוסט'
  },
  {
    icon: timer,
    label: 'טיימר'
  }
    
  ];

  return (
    <IonFooter>
      <IonTabBar>
        {links.map((link, index) => (
          <IonTabButton tab={`tab${index + 1}`} href={`/tabs/tab${index + 1}`} key={index}>
            <IonIcon aria-hidden="true" icon={link.icon} />
            <IonLabel>{link.label}</IonLabel>
          </IonTabButton>
        ))}
      </IonTabBar>
    </IonFooter>
  );
};

export default Footer;
