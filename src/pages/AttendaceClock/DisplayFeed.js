import React, { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import DisplayfeesStayle from '../AttendaceClock/DisplayfeesStayle';
import { IonCardHeader, IonTitle, IonCardContent } from '@ionic/react';

function DisplayFeed() {
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
    <DisplayfeesStayle>
      <IonCardHeader>
        <IonTitle>מעקב עבודות</IonTitle>
      </IonCardHeader>
      {attendance.map((item, index) => (
        <IonCardContent className='ion-text-center' key={index}>
          <h1>{`שם הבעלים: ${item.owner}`}</h1>
          <p>{`בתאריך: ${item.dateStart}  , שעת תחילת העבודה: ${item.start} `}</p>
          <p>{` בתאריך: ${item.dateStop}  ,  שעת סוף העבודה: ${item.stop}`}</p>
          <p>{` חושב לפי: ${item.payment} לשעה`}<br/></p>
          <p>{` התשלום הנדרש: ${item.totalPayment}`}<br/></p>
          <p>{` בעבוד שעות: ${item.hours}`}<br/></p>
        </IonCardContent>
      ))}
    </DisplayfeesStayle>
  );
}
export default DisplayFeed;
