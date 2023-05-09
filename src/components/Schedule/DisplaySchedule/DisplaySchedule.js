import React, { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../../firebase';
import DisplayScheduleStayle from './DisplayScheduleStayle';
import { IonCardHeader, IonTitle, IonCardContent, IonCard } from '@ionic/react';

function DisplaySchedule() {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const getAttendance = async () => {
      const querySnapshot = await getDocs(collection(db, 'attendance'));
      const attendance = querySnapshot.docs.map((doc) => doc.data());
      setAttendance(attendance);
    };
    getAttendance();
  }, []);

  return (
    <DisplayScheduleStayle>
      <IonCard>
        <IonCardHeader>
          <IonTitle>Job history</IonTitle>
        </IonCardHeader>
        
        {attendance.map((item, index) => (
          <IonCardContent className="ion-text-center" key={index}>
            <h1>{`Owner Name: ${item.owner}`}</h1>
            <p>{`On date: ${item.dateStart} , work start time: ${item.start} `}</p>
            <p>{` on date: ${item.dateStop} , work end time: ${item.stop}`}</p>
            <p>
              {` calculated according to: ${item.payment} per hour`}
              <br />
            </p>
            <p>
              {`Required payment: ${item.totalPayment}`}
              <br />
            </p>
            <p>
              {` working hours: ${item.hours}`}
              <br />
            </p>
          </IonCardContent>
        ))}
      </IonCard>
    </DisplayScheduleStayle>
  );
}
export default DisplaySchedule;
