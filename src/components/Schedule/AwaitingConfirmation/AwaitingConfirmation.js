import React, { useEffect, useContext, useState } from 'react';
import { db } from '../../../firebase';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { IonCheckbox, IonIcon, IonList, IonText,IonButton } from '@ionic/react';
import { calendarNumberOutline, alarmOutline, cashOutline } from 'ionicons/icons';
import AuthContext from 'providers/AuthContext';
import StyledAwaitingConfirmation from './StyledAwaitingConfirmation';
import { useUser } from 'hook/users';
import PropTypes from 'prop-types';
import { trashOutline, createOutline } from 'ionicons/icons';



const JobItem = ({ title, items }) => (
  <React.Fragment>
    {Array.isArray(items) && items.length > 0 ? (
      items.map((item, index) => (
        <IonList key={index}>
            <h3>{title}</h3>
          <div className="date">
          <IonText >
              <IonIcon icon={calendarNumberOutline} />
              {item.dateStart}<span> - </span>{item.dateStop}
            </IonText>
          </div>
          <div className="time">
          <IonText >
              <IonIcon icon={alarmOutline} />
              {item.start} <span> -  </span>  {item.stop}
            </IonText>
          </div>
          <div className="payment">
            <IonText >
              <IonIcon icon={cashOutline} />
              {item.payment}₪ (cash)
            </IonText>
          </div>
          <div className="IsAccept">
            <IonCheckbox slot="end" />
          </div>
          <div className="buttons">
            <IonButton
              className="deleteButton"
              color="danger"
              fill="clear"
              isRound
            >
              <IonIcon icon={trashOutline} />
            </IonButton>
            <IonButton className="editButton" color='warning' fill="clear" isRound>
              <IonIcon icon={createOutline} />
            </IonButton>
            <IonButton className="SeeRequests"  fill="clear" isRound>
              See Requests
            </IonButton>

          </div>

        </IonList>
      ))
    ) : (
      <p></p>
    )}
  </React.Fragment>
);


const AwaitingConfirmation = () => {
  const { userId } = useContext(AuthContext);
  const [availableJob, setAvailableJob] = useState([]);

  useEffect(() => {
    const getAvailableJobList = async () => {
      try {
        const querySnapshot = await getDocs(query(collection(db, 'availability'), where('userId', '==', userId)));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setAvailableJob(data);
      } catch (err) {
        console.error(err);
      }
    };
    getAvailableJobList();
  }, [userId]);

  return (
    <StyledAwaitingConfirmation>
      <h2>Awaiting Confirmation</h2>
      {/* {availableJob.map((data) => (
        <React.Fragment key={data.id}>
          <JobItem title="Dog-Sitter" items={data['Dog-Sitter']} />
          <JobItem title="Dog-walker" items={data['Dog-walker']} />
        </React.Fragment>
      ))} */}
    </StyledAwaitingConfirmation>
  );
};

export default AwaitingConfirmation;

JobItem.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
};

