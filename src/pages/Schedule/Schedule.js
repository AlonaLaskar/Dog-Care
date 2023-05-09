import React from 'react';
import { IonContent, IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';
import { IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router-dom';
//!Styles
import HistoryJob from '../../components/Schedule/HistoryJob';
import Availability from '../../components/Schedule/Availability';
import DisplaySchedule from '../../components/Schedule/DisplaySchedule';
import StyledSchedule from './StyledSchedule';


const Schedule = () => {
  return (   
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/schedule/history" component={HistoryJob} />
        <Route exact path="/schedule/availability" component={Availability} />
        <Route exact path="/schedule/display" component={DisplaySchedule} />
      </IonRouterOutlet>


      {/*-- Tab bar --*/}

      <IonTabBar slot="top">

        <IonTabButton tab="History Job" href='/schedule/history'>
          <IonIcon icon={calendar}  />
          <IonLabel>History Job</IonLabel>
        </IonTabButton>

        <IonTabButton tab="Availability" href='/schedule/availability'>
          <IonIcon icon={calendar} />
          <IonLabel>Availability</IonLabel>
        </IonTabButton>

        <IonTabButton tab="Careers" href='/schedule/display'>
          <IonIcon icon={calendar}  />
          <IonLabel>Careers</IonLabel>
        </IonTabButton>

      </IonTabBar>
    </IonTabs>
  
  );
};

export default Schedule;
