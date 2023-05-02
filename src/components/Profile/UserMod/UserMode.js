import StyledUserMode from './StyledUserMode';
import { IonLabel, IonCheckbox, IonText, IonInput, IonButton } from '@ionic/react';
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
      if (walkingChecked === false && keepingChecked === false) {
        presentToast('You must choose at least one option!', false);
        return;
      }
      if ((walkingChecked === true && walkingPrice === '')|| (keepingChecked === true && keepingPrice === '')) {
        presentToast('You must enter a price !', false);
        return;
      }
      if ((walkingChecked&&walkingPrice > 0) || (keepingChecked&&keepingPrice > 0)) { // Check if the inputs are greater than 0
        await updateDoc(userRef, {
          walking: walkingChecked,
          keeping: keepingChecked,
          walkingPrice: walkingPrice,
          keepingPrice: keepingPrice
        });
        presentToast('You on provied mod!', true);
        history.push('/my/home');
      } else {
        presentToast('Please enter a valid price!', false);
      }
    } catch (error) {
      presentToast('Something went wrong!', false);
    }
  }

  return (
    <StyledUserMode>
      <div className="sarch">
        <IonText className="searchText"> Job:</IonText>
        <IonCheckbox
          className="walkingChecked"
          checked={walkingChecked}
          onIonChange={(event) => setWalkingChecked(event.detail.checked)}
        />
        <IonLabel className="wakkingText">Walking the dog</IonLabel>

        <IonCheckbox
          className="keepingChecked"
          checked={keepingChecked}
          onIonChange={(event) => setKeepingChecked(event.detail.checked)}
        />
        <IonLabel className='keepingText'>Keeping the dog</IonLabel>
      </div>
      <div className="price">
      <IonText className="price">Price ranges:</IonText>
      <IonInput
      label="Dog walking"
      labelPlacement="floating"
      fill="solid"
      type="number"
      placeholder="Dog-walking"
      value={walkingPrice}
      onIonChange={(event) => setWalkingPrice(event.detail.value)}
      />
      <IonInput
      label="Dog keeping"
      labelPlacement="floating"
      fill="solid"
      type="number"
      placeholder="Dog-keeping"
      value={keepingPrice}
      onIonChange={(event) => setKeepingPrice(event.detail.value)}
      />
      </div>
      <IonButton className='save' onClick={saveProfile}>Save</IonButton>
    </StyledUserMode>
  );
};

export default UserMode;
