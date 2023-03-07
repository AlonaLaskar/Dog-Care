import StyledFooter from './StyledFooter';
import { IonIcon, IonLabel, IonTabBar, IonTabButton } from '@ionic/react';
import { ellipse, square, triangle } from 'ionicons/icons';

const Footer = () => {
  const links = [
    {
      href: '/',
      icon: triangle,
      label: 'דף הבית'
    },
    {
      href: '/login',
      icon: square,
      label: 'התחברות'
    },
    {
      href: '/',
      icon: ellipse,
      label: 'צור קשר'
    }
  ];

  return (
    <StyledFooter>
      <IonTabBar slot="bottom">
        {links.map((link, index) => (
          <IonTabButton tab={`tab${index + 1}`} href={link.href} key={index}>
            <IonIcon aria-hidden="true" icon={link.icon} />
            <IonLabel>{link.label}</IonLabel>
          </IonTabButton>
        ))}
      </IonTabBar>
    </StyledFooter>
  );
};

export default Footer;
