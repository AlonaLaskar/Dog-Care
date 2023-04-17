//!React
import { Route, Redirect } from 'react-router-dom';
//! Ionic-pacakges
import { IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonIcon, IonLabel } from '@ionic/react';
import { person, duplicate, newspaper, today, chatbox } from 'ionicons/icons';
//!system-components

//!pages
import Home from 'pages/Home';
import Profile from 'pages/Profile';
import Schedule from 'pages/Schedule';
import Comments from 'pages/Comments';
import Post from 'pages/Feed';
import NotFound from 'pages/NotFound';
import EditProfile from '../Profile/EditProfile';
import Chat from 'pages/Chat';

//!context
import AuthContext from 'providers/AuthContext';
import { useContext } from 'react';

export const AppTabs = () => {
  //if user is not logged in redirect to login page
  const { loggedIn } = useContext(AuthContext);
  if (!loggedIn) {
    console.log('not logged in');
    return <Redirect to="/login" />;
  }

  return (
    <IonTabs>
      <IonRouterOutlet>
        {/* Profile */}

        <Route exact path="/my/home" component={Home} />
        <Route exact path="/my/profile/:id" component={Profile} />
        <Route exact path="/my/editProfile/:id" component={EditProfile} />
        <Route exact path="/my/post" component={Post} />
        <Route exact path="/my/Schedule" component={Schedule} />
        <Route exact path="/my/comments/:id" component={Comments} />
        <Route exact path="/my/chat" component={Chat} />

        {/* Errors handling */}
        <Route component={NotFound} status={404} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="Chat" href="/my/chat">
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

        <IonTabButton tab="Schedule" href="/my/Schedule">
          <IonIcon icon={today} />
          <IonLabel>Schedule</IonLabel>
        </IonTabButton>

        <IonTabButton tab="post" href="/my/post">
          <IonIcon icon={newspaper} />
          <IonLabel> Feed</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};
