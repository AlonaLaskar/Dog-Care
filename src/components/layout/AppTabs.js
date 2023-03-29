import { Route, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyle from 'styles/globalStyle';
import { IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonIcon, IonLabel } from '@ionic/react';
import { person, home, create, timer } from 'ionicons/icons';

import Home from 'pages/Home';

import Login from 'pages/Login';
import Register from 'pages/Register';
import Profile from 'pages/Profile';
import AttendaceClock from 'pages/AttendaceClock';
import Comments from 'pages/Comments';
import Dashboard from 'components/Dashboard';
import Post from 'pages/post/postIndex';
import NotFound from 'pages/NotFound';

export const AppTabs = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <IonTabs>
        <IonRouterOutlet>
          {/* Authentication */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />

          {/* Profile */}
          <Route path="/my/home" component={Home} />
          <Route path="/my/register" component={Register} />
          <Route path="/my/profile" component={Profile} />
          <Route path="/my/post" component={Post} />
          <Route path="/my/attendaceclock" component={AttendaceClock} />
          <Route path="/my/bashboard" component={Dashboard} />
          <Route path="/my/comments/:id" component={Comments} />

          {/* Redirects */}
          <Redirect exact path="/" to="/my/home" />
          <Redirect exact path="/my" to="/my/home" />

          {/* Errors handling */}
          <Route component={NotFound} status={404} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/my/home">
            <IonIcon icon={home} />
            <IonLabel>עמוד הבית</IonLabel>
          </IonTabButton>

          <IonTabButton tab="profile" href="/my/profile/:id">
            <IonIcon icon={person} />
            <IonLabel>פרופיל</IonLabel>
          </IonTabButton>

          <IonTabButton tab="post" href="/my/post">
            <IonIcon icon={create} />
            <IonLabel>יצירת פוסט</IonLabel>
          </IonTabButton>

          <IonTabButton tab="attendaceclock" href="/my/attendaceclock">
            <IonIcon icon={timer} />
            <IonLabel>שעון נוכחות</IonLabel>
          </IonTabButton>

          <IonTabButton tab="bashboard" href="/my/bashboard">
            <IonIcon icon={timer} />
            <IonLabel> פייד</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </ThemeProvider>
  );
};

AppTabs.propTypes = {
  authStatus: propTypes.bool
};
