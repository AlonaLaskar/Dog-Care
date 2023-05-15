import { IonList, IonItem, IonAvatar, IonLabel, IonContent, IonTitle, IonImg } from '@ionic/react';
import StyledPeopleULike from './StyledPeopleULike';
import { db, auth } from '../../../firebase';
import { collection, query, where } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useContext, useEffect, useState } from 'react';
import AuthContext from 'providers/AuthContext';
import { doc } from 'firebase/firestore';
import { getDoc } from 'firebase/firestore';

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

      for (const uid of peopleYouLike) {
        const docRef = doc(db, 'users', uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log('Document data:', data);
          newUsers.push(data.avatar + ',' + data.fullName);
        } else {
          console.log('No such document!');
        }
      }

      setUser(newUsers);
    }

    if (peopleYouLike.length > 0) {
      fetchData();
    }
  }, [peopleYouLike]);

  return (
    <StyledPeopleULike>
      <div className="title"> 
      <span>People you like </span>
      </div>
      
        <IonList>
          {user.map((user) => (
            <IonItem key={user}>
              <IonAvatar slot="start">
                <IonImg src={user.split(',')[0]}  />
              </IonAvatar>
              <IonTitle>{user.split(',')[1]}</IonTitle>
            </IonItem>
          ))}
        </IonList>
   
    </StyledPeopleULike>
  );
};
export default PeopleULike;
