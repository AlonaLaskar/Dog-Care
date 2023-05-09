//!Components
import Timer from '../../components/Schedule/Timer/Timer';
import ServiceMode from '../../components/Schedule/ServiceMode';
import DisplaySchedule from '../../components/Schedule/DisplaySchedule';
//!Ion
import { IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonIcon, IonLabel } from '@ionic/react';

import { Redirect, Route } from 'react-router-dom';
import { calendarOutline, timerOutline, walkOutline } from 'ionicons/icons';

//!Styles
import StyledSchedule from './StyledSchedule';

const Schedule = () => {
  return (
    <StyledSchedule>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/schedule/timer" component={Timer} exact={true} />
          <Route path="/schedule/service-mode" component={ServiceMode} exact={true} />
          <Route path="/schedule/display-schedule" component={DisplaySchedule} exact={true} />
          <Route path="/schedule" render={() => <Redirect to="/schedule/timer" />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar tabbarPlacement="top">
          <IonTabButton tab="timer" href="/schedule/timer">
            <IonIcon icon={timerOutline} />
            <IonLabel>Timer</IonLabel>
          </IonTabButton>

          <IonTabButton tab="service-mode" href="/schedule/service-mode">
            <IonIcon icon={walkOutline} />
            <IonLabel>Service Mode</IonLabel>
          </IonTabButton>

          <IonTabButton tab="display-schedule" href="/schedule/display-schedule">
            <IonIcon icon={calendarOutline} />
            <IonLabel>Display Schedule</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>

    </StyledSchedule>
  );
};

export default Schedule;
