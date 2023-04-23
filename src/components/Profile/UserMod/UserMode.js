import StyledUserMode from './StyledUserMode';
import { IonList, IonItem, IonLabel, IonCheckbox, IonText, IonInput, IonButton } from '@ionic/react';
import { db } from '../../../firebase';
import { useState, useContext } from 'react';
import AuthContext from 'providers/AuthContext';
import { doc, updateDoc } from 'firebase/firestore';
import { useHistory } from 'react-router-dom';

import useToast from 'hook/useToast';
const UserMode = () => {
  const [walkingChecked, setWalkingChecked] = useState(false);
  const [keepingChecked, setKeepingChecked] = useState(false);
  const [walkingPrice, setWalkingPrice] = useState('');
  const [keepingPrice, setKeepingPrice] = useState('');
  const { userId } = useContext(AuthContext) || {};
  const history = useHistory();

  const presentToast = useToast();
  async function saveProfile() {
    const userRef = doc(db, 'users', userId);
    try {
      await updateDoc(userRef, {
        walking: walkingChecked,
        keeping: keepingChecked,
        walkingPrice: walkingPrice,
        keepingPrice: keepingPrice
      });
      presentToast('You on provied mod!', true);
      history.push('/my/home');
    
      console.log('You on provied mod!');
    } catch (error) {
      presentToast('Something went wrong!', false);
      console.log('Something went wrong!');
    }
  }

  return (
    <StyledUserMode>
      <IonList>
        <IonText>Searching for:</IonText>
        <IonCheckbox checked={walkingChecked} onIonChange={(event) => setWalkingChecked(event.detail.checked)} />
        <IonLabel>Walking the dog</IonLabel>

        <IonCheckbox checked={keepingChecked} onIonChange={(event) => setKeepingChecked(event.detail.checked)} />
        <IonLabel>Keeping the dog</IonLabel>

        <IonText>Price ranges:</IonText>
        <IonInput
          type="number"
          placeholder="Dog walking"
          value={walkingPrice}
          onIonChange={(event) => setWalkingPrice(event.detail.value)}
        />
        <IonInput
          type="number"
          placeholder="Dog-keeping"
          value={keepingPrice}
          onIonChange={(event) => setKeepingPrice(event.detail.value)}
        />
        <IonButton onClick={saveProfile}>Save</IonButton>
      </IonList>
    </StyledUserMode>
  );
};

export default UserMode;
