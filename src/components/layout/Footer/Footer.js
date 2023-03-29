import StyledFooter from './StyledFooter';
import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonFooter } from '@ionic/react';
import { person, add, square, home, create, timer } from 'ionicons/icons';

const Footer = () => {
  const links = [
    {
      icon: home,
      label: 'דף הבית',
      path: '/'
    },
    {
      icon: square,
      label: 'התחברות',
      path: '/login'
    },
    {
      icon: add,
      label: 'הרשמה',
      path: '/register'
    },
    {
      icon: person,
      label: 'פרופיל',
      path: '/profile'
    },
    {
      icon: create,
      label: 'יצירת פוסט',
      path: '/creatpost'
    },
    {
      icon: timer,
      label: 'טיימר',
      path: '/attendaceclock'
    }
  ];

  return (
    <IonFooter>
      <IonTabBar>
        {links.map((link, index) => (
          <IonTabButton tab={`tab${index + 1}`} href={link.path} key={index}>
            <IonIcon aria-hidden="true" icon={link.icon} />
            <IonLabel>{link.label}</IonLabel>
          </IonTabButton>
        ))}
      </IonTabBar>
    </IonFooter>
  );
};

export default Footer;
