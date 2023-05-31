import { IonList, IonAvatar, IonIcon, IonText, IonTitle, IonImg } from '@ionic/react';
import { calendarNumberOutline, alarmOutline, cashOutline,locationOutline } from 'ionicons/icons';
import StyledPeopleULike from './StyledPeopleULike';
import { db } from '../../../firebase';
import { collection, query, where } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useContext, useEffect, useState } from 'react';
import AuthContext from 'providers/AuthContext';
import { doc,getDoc } from 'firebase/firestore';

function findPeopleYouLike() {
  const { userId } = useContext(AuthContext) || {};
  const q = query(collection(db, 'swipes'), where('user', '==', userId));
  const [swipes] = useCollectionData(q);
  if (swipes === undefined) {
    console.log('swipes is undefined');
    return [];
  }
  const peopleYouLike = swipes?.[0]?.rightSwipes;
  return peopleYouLike;
}

const PeopleULike = () => {
  const [user, setUser] = useState([]);
  const peopleYouLike = findPeopleYouLike();
  useEffect(() => {
    async function fetchData() {
      const newUsers = [];

      if (peopleYouLike && peopleYouLike.length > 0) {
        for (const uid of peopleYouLike) {
          const docRef = doc(db, 'users', uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            console.log('Document data:', data);
            newUsers.push(
              data.avatar +
                ',' +
                data.fullName +
                ',' +
                data.city +
                ',' +
                data.dateStart +
                ',' +
                data.dateStop +
                ',' +
                data.start +
                ',' +
                data.stop +
                ',' +
                data.role+
                ','+
                data.payment

            );
          } else {
            console.log('No such document!');
          }
        }
      }

      setUser(newUsers);
    }

    fetchData();
  }, [peopleYouLike]);
  return (
    <StyledPeopleULike>
      <div className="title">
        <span>People you like </span>
      </div>

        {user.map((user) => (
      <IonList  key={user}>
            <IonTitle>{user.split(',')[1]}</IonTitle>
            <IonAvatar slot="start">
              <IonImg src={user.split(',')[0]} />
            </IonAvatar>{' '}
            <div className="city">
              <IonText>
                <IonIcon icon={locationOutline} />
                {user.split(',')[2]}
              </IonText>
            </div>
            <div className="date">
              <IonText>
                <IonIcon icon={calendarNumberOutline} />
                {user.split(',')[3]}
                <span> - </span>
                {user.split(',')[4]}      
                </IonText>
            </div>
            <div className="time">
              <IonText>
                <IonIcon icon={alarmOutline} />
                {user.split(',')[5]} <span> - </span> {user.split(',')[6]}
              </IonText>
            </div>
            <div className="payment">
              <IonText>
                <IonIcon icon={cashOutline} />
                {user.split(',')[8]}₪ (cash)
              </IonText>
            </div>
            <div className="role">
              <IonText>
                {user.split(',')[7]}
              </IonText>
            </div>
            <IonText></IonText>         
      </IonList>
        ))}

    </StyledPeopleULike>
  );
};
export default PeopleULike;
