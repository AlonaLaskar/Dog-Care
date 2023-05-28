import React, { useState } from 'react';
import { IonHeader, IonSelect, IonToolbar,IonContent, IonTitle, IonSelectOption} from '@ionic/react';
import StyledHome from './StyledHome';
import ProfileCard from 'components/ProfileCard/ProfileCard';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, doc } from 'firebase/firestore';
import { db, auth } from '../../firebase';
import ActionButton from 'components/ProfileCard/ActionButton/ActionButton';
import { saveRightSwipe } from 'hook/users';
import { useParams } from 'react-router-dom';
import { useDocumentData } from 'react-firebase-hooks/firestore';
const Home = () => {



  const [animateUnmatchButton, setAnimateUnmatchButton] = useState(false);
  const [animateMatchButton, setAnimateMatchButton] = useState(false);

  const [pageStatus, setPageStatus] = useState('Dog-walker');

  function useUsers() {
    const [users, isLoading] = useCollectionData(collection(db, 'users'));

    return { users, isLoading };
  }

  const { users} = useUsers();
  const user = auth.currentUser;
  const userRef = doc(db, 'users', user.uid);

  const ProfileEvents = {
    onMatch: () => {
      setAnimateMatchButton(true);
      setAnimateUnmatchButton(false);
    },
    onUnmatch: () => {
      setAnimateUnmatchButton(true);
      setAnimateMatchButton(false);
    },
    onreset: () => {
      setAnimateUnmatchButton(false);
      setAnimateMatchButton(false);
    },
  };

  const handleTitleClick = () => {
    setPageStatus((prevStatus) =>
      prevStatus === 'Dog-walker' ? 'Dog-Sitter' : 'Dog-walker'
    );
  };
 

  return (
    <StyledHome>
      <IonHeader>
        <IonToolbar >
          <div className='action-bar'>
        <IonSelect aria-label="Fruit" interface="action-sheet" placeholder={pageStatus} onIonChange={e => setPageStatus(e.detail.value)}>
          <IonSelectOption value="Dog-walker" onClick={handleTitleClick}>Dog-walker</IonSelectOption>
          <IonSelectOption value="Dog-Sitterr"onClick={handleTitleClick}>Dog-Sitter </IonSelectOption>
        </IonSelect>
        </div>
          {/* <IonTitle onClick={handleTitleClick}>{pageStatus}</IonTitle> */}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="card-stack-container">
          {users &&
            users
              .filter(
                (user) =>
                  pageStatus === 'Dog-walker'
                    ? user.role==='Dog-walker' && user.payment> 0
                    : user.role === 'Dog-Sitter' && user.payment > 0
              )
              .map((user) => (
                <ProfileCard {...user} key={user.id} {...ProfileEvents} pageStatus={pageStatus} />
              ))}
        </div>
        <ActionButton
          {...{
            animateMatchButton,
            animateUnmatchButton,
          }}
        />
      </IonContent>
    </StyledHome>
  );
};

export default Home;
