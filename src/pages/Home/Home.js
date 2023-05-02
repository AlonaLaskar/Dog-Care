import React, { useState } from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import StyledHome from './StyledHome';
import ProfileCard from 'components/ProfileCard/ProfileCard';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, doc } from 'firebase/firestore';
import { db, auth } from '../../firebase';
import ActionButton from 'components/ProfileCard/ActionButton/ActionButton';

const Home = () => {
  const [animateUnmatchButton, setAnimateUnmatchButton] = useState(false);
  const [animateMatchButton, setAnimateMatchButton] = useState(false);
  const [pageStatus, setPageStatus] = useState('Dog-walker');

  function useUsers() {
    const [users, isLoading] = useCollectionData(collection(db, 'users'));

    return { users, isLoading };
  }

  const { users, isLoading } = useUsers();
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
  console.log("pageStatus, ", pageStatus);

  return (
    <StyledHome>
      <IonHeader mode="ios">
        <IonToolbar mode="ios">
          <IonTitle onClick={handleTitleClick}>{pageStatus}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="card-stack-container">
          {users &&
            users
              .filter(
                (user) =>
                  pageStatus === 'Dog-walker'
                    ? user.walking === true && user.walkingPrice > 0
                    : user.keeping === true && user.keepingPrice > 0
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
