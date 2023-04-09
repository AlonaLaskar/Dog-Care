//!React
import { Route, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
//! Ionic-pacakges
import { IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonIcon, IonLabel } from '@ionic/react';
import { person, duplicate, newspaper, today,chatbox } from 'ionicons/icons';
//!system-components
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyle from 'styles/globalStyle';
//!pages
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Profile from 'pages/Profile';
import AttendaceClock from 'pages/AttendaceClock';
import Comments from 'pages/Comments';
import Post from 'pages/Feed';
import NotFound from 'pages/NotFound';
import EditProfile from '../Profile/EditProfile';
import Chat from 'pages/Chat';

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
          <Route path="/my/profile/:id" component={Profile} />
          <Route path="/my/editProfile/:id" component={EditProfile} />
          <Route path="/my/post" component={Post} />
          <Route path="/my/attendaceclock" component={AttendaceClock} />
          <Route path="/my/comments/:id" component={Comments} />
          <Route path="/my/chat" component={Chat} />
          
          {/* Redirects */}
          <Redirect exact path="/" to="/my/home" />
          <Redirect exact path="/my" to="/my/home" />

          {/* Errors handling */}
          <Route component={NotFound} status={404} />
        </IonRouterOutlet>


        <IonTabBar slot="bottom">

        <IonTabButton tab="Chat" href="/my/chat" >
            <IonIcon icon={chatbox} />
            <IonLabel>Chat</IonLabel>
          </IonTabButton>

          <IonTabButton tab="profile" href="/my/profile/:id">
            <IonIcon icon={person} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>

          <IonTabButton tab="home" href="/my/home">
            <IonIcon icon={duplicate} />
            <IonLabel>Service</IonLabel>
          </IonTabButton>


          <IonTabButton tab="attendaceclock" href="/my/attendaceclock">
            <IonIcon icon={today} />
            <IonLabel>Schedule</IonLabel>
          </IonTabButton>

          <IonTabButton tab="post" href="/my/post">
          <IonIcon icon={newspaper} />
            <IonLabel> Feed</IonLabel>
          </IonTabButton>
          
       

        </IonTabBar>
      </IonTabs>
    </ThemeProvider>
  );
};

AppTabs.propTypes = {
  authStatus: propTypes.bool
};
