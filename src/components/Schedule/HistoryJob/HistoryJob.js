import { useEffect, useContext, useState } from 'react';
import { db } from '../../../firebase';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { IonAvatar, IonCard, IonItem, IonLabel, IonList, IonText } from '@ionic/react';
import AuthContext from 'providers/AuthContext';
import StyledHistoryJob from './StyledHistoryJob';
import { useUser } from 'hook/users';

const HistoryJob = () => {
  const { userId } = useContext(AuthContext);
  const { user } = useUser(userId) || {};

  const [availableJob, setAvailableJob] = useState([]);

  useEffect(() => {
    const getAvailableJobList = async () => {
      try {
        const availabilityCollectionRef = collection(db, 'availability');
        const querySnapshot = await getDocs(query(availabilityCollectionRef, where('userId', '==', userId)));
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
    <StyledHistoryJob>
      <IonCard>
        <IonList>
          {availableJob.map((job) => (
            <IonItem key={job.id}>
              <IonAvatar slot="start">
                <img src={user?.avatar} alt="User Avatar" />
              </IonAvatar>
              <IonLabel>
                <h2>{job.date}</h2>
                {job['dog-sitting'] && (
                  <div className="dogSitter">
                    <IonText color="primary">
                      <h3>Dog Sitting</h3>
                    </IonText>
                    <div className="dog-sitting">
                      {job['dog-sitting'].map((sitting, index) => (
                        
                        <div key={index}>
                          <p>{index}</p>
                          <p>Start Date: {sitting.dateStart}</p>
                          <p>End Date: {sitting.dateStop}</p>
                          <p>Start Time: {sitting.start}</p>
                          <p>End Time: {sitting.stop}</p>
                          <p>Payment: {sitting.payment}</p>
                          <br />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {job['dog-walking'] && (
                  <div className="dog-walking">
                    <IonText color="primary">
                      <h3>Dog Walking</h3>
                    </IonText>
                    {job['dog-walking'].map((walking, index) => (
                      <div key={index}>
                        <p>Start Date: {walking.dateStart}</p>
                        <p>End Date: {walking.dateStop}</p>
                        <p>Start Time: {walking.start}</p>
                        <p>End Time: {walking.stop}</p>
                        <p>Payment: {walking.payment}</p>
                      </div>
                    ))}
                  </div>
                )}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonCard>
    </StyledHistoryJob>
  );
};

export default HistoryJob;
