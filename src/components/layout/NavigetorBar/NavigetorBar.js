import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle } from '@ionic/react';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

function NavigationBar() {
  const [user] = useAuthState(auth);
  const history = useHistory();

  const logoutHandler = async () => {
    await signOut(auth);
    history.push('/login');

  };

  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonTitle>Dog Sitter</IonTitle>
          {user ? (
            <>
            <IonButton onClick={logoutHandler}>Logout</IonButton>
            <p>{` שלום: ${user.displayName}||:${user.uid}`}</p></>
          ) : (
            <>
              <Link to="/login">
                <IonButton>Login</IonButton>
              </Link>
              <Link to="/register">
                <IonButton>Register</IonButton>
              </Link>
          <Link to="/">
            <IonButton>Home</IonButton>
          </Link>
            </>
          )}
        </IonButtons>
        <IonButtons slot="end">
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
}

export default NavigationBar;
