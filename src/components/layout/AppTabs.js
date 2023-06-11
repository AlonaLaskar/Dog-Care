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
import Chat from 'pages/Chat';
import EditProfile from 'pages/EditProfile';
import ServiceMode from '../../components/Schedule/ServiceMode';
import DogSitterService from 'components/Schedule/DogSitterService';
import SendRequestMassage from '../../components/Schedule/DogSitterService/SendRequestMassage';
import PeopleULike from '../../components/Schedule/PeopleULike';
import AwaitingConfirmation from '../../components/Schedule/AwaitingConfirmation';
import JobSearch from '../../components/Schedule/JobSearch';
import EditAvilabilty from '../../components/Availability/EditAvilabilty';

//!context
import AuthContext from 'providers/AuthContext';
import { useContext } from 'react';

export const AppTabs = () => {
  //if user is not logged in redirect to login page
  const { loggedIn,userId } = useContext(AuthContext);
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
        <Route exact path="/my/serviceMode" component={ServiceMode} />
        <Route exact path="/my/DogSitterService:selectedService" component={DogSitterService} />
        <Route exact path="/my/SendRequestMassage/:id" component={SendRequestMassage} />
        <Route exact path="/my/peopleulike" component={PeopleULike} />
        <Route exact path="/my/awaitingconfirmation" component={AwaitingConfirmation} />
        <Route exact path="/my/jobsearch" component={JobSearch} />
        <Route exact path="/my/editAvilabilty/:id" component={EditAvilabilty} />

        {/* Errors handling */}
        <Route component={NotFound} status={404} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        {/* <IonTabButton tab="Chat" href="/my/chat">
          <IonIcon icon={chatbox} />
          <IonLabel>Chat</IonLabel>
        </IonTabButton> */}

        <IonTabButton tab="profile" href={`/my/profile/${userId}`}>
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

