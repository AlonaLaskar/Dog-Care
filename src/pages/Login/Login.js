import React, { useState } from 'react';
import StyledLogin from './StyledLogin';
import { useHistory } from 'react-router-dom';

import { IonIcon, IonButton } from '@ionic/react';
import { logoFacebook, logoGoogle } from 'ionicons/icons';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);

  const validateHandler = () => {
    setEmailError(email === '' ? 'חובה להזין כתובת מייל' : null);
    setPasswordError(password === '' ? 'חובה להזין סיסמא' : null);
  };

  const loginHandler = () => {
    setEmailError(email === '' ? 'חובה להזין כתובת מייל' : null);
    setPasswordError(password === '' ? 'חובה להזין סיסמא' : null);
    if (!emailError && !passwordError) console.log('Login');
  };

  const registerHandler = () => {
    history.push('/tabs/tab3');

    console.log('Register');
  };

  return (
    <StyledLogin>
      <div className="form">
        <h1>התחברות</h1>

        <div className="form-group">
          <label htmlFor="email">אימייל</label>
          <input
            id="email"
            type="email"
            placeholder="אנא הזן אימייל"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateHandler}
          />
          {emailError && <div className="error">{emailError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">סיסמא</label>
          <input
            type="password"
            placeholder="אנא הזן סיסמא"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <div className="error">{passwordError}</div>}
        </div>
        <div className="form-buttons">
          <IonButton expand="block" onClick={loginHandler}>
            התחברות
          </IonButton>
          <IonButton expand="block" fill="clear" onClick={registerHandler}>
            הרשמה
          </IonButton>
        </div>

        <div className="form-social">
          <h3>או באמצעות</h3>
          <div className="form-buttons">
            <IonButton expand="fill" color="none" id="google" className="social-button">
              <IonIcon slot="start" icon={logoGoogle} />
              התחברות עם גוגל
            </IonButton>
            <IonButton expand="fill" color="none" id="facebook" className="social-button">
              <IonIcon slot="start" icon={logoFacebook} />
              התחברות עם פייסבוק
            </IonButton>
          </div>
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;
