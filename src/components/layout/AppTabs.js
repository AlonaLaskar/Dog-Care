import { Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyle from 'styles/globalStyle';
import { IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonIcon, IonLabel } from '@ionic/react';
import { person, home, create, timer } from 'ionicons/icons';
import Header from 'components/layout/Header';

import Home from 'pages/Home';

import Register from 'pages/Register';
import Profile from 'pages/Profile';
import CreatPost from 'pages/CreatPost';
import AttendaceClock from 'pages/AttendaceClock';
export const AppTabs = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/my/home" component={Home} />
          <Route path="/my/register" component={Register} />
          <Route path="/my/profile" component={Profile} />
          <Route path="/my/creatpost" component={CreatPost} />
          <Route path="/my/attendaceclock" component={AttendaceClock} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/my/home">
            <IonIcon icon={home} />
            <IonLabel>עמוד הבית</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profile" href="/my/profile">
            <IonIcon icon={person} />
            <IonLabel>פרופיל</IonLabel>
          </IonTabButton>
          <IonTabButton tab="creatpost" href="/my/creatpost">
            <IonIcon icon={create} />
            <IonLabel>יצירת פוסט</IonLabel>
          </IonTabButton>
          <IonTabButton tab="attendaceclock" href="/my/attendaceclock">
            <IonIcon icon={timer} />
            <IonLabel>שעון נוכחות</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </ThemeProvider>
  );
};
