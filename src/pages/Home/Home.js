import React, { useState } from 'react';
import { IonContent, IonHeader, IonSelect, IonToolbar } from '@ionic/react';
import StyledHome from './StyledHome';
import ProfileCard from 'components/ProfileCard';
import ActionButton from 'components/ProfileCard/ActionButton/ActionButton';
import {  IonSelectOption } from '@ionic/react';
import { useUsers} from 'hook/users';



const Home = () => {
  const [animateUnmatchButton, setAnimateUnmatchButton] = useState(false);
  const [animateMatchButton, setAnimateMatchButton] = useState(false);

  const [pageStatus, setPageStatus] = useState('Dog-walker');

  const { users} = useUsers();





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
      <IonHeader >
        <IonToolbar >
          <div className='action-bar'>
            <IonSelect aria-label="Fruit" interface="action-sheet" placeholder={pageStatus} onIonChange={e => setPageStatus(e.detail.value)}>
              <IonSelectOption value="Dog-walker" onClick={handleTitleClick}>Dog-walker</IonSelectOption>
              <IonSelectOption value="Dog-Sitter"onClick={handleTitleClick}>Dog-Sitter </IonSelectOption>
           </IonSelect>
        </div>
          {/* <IonTitle onClick={handleTitleClick}>{pageStatus}</IonTitle> */}
        </IonToolbar>
      </IonHeader>
   
        <IonContent fullscreen>
          <div className='card-stack-container'>
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
