import React, { useState } from 'react';
import StyledLogin from './StyledLogin';

import { IonIcon, IonPage } from '@ionic/react';
import { logoFacebook, logoGoogle } from 'ionicons/icons';

const Login = () => {
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
    console.log('Register');
  };

  return (
    <IonPage>
      <StyledLogin>
        <h1>התחברות</h1>
        <div className="form">
          <div className="form-group">
            <label htmlFor="email">אימייל</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateHandler}
            />
            {emailError && <div className="error">{emailError}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="password">סיסמא</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {passwordError && <div className="error">{passwordError}</div>}
          </div>
          <div className="form-buttons">
            <button onClick={loginHandler} className="primary-button">
              התחברות
            </button>
            <button onClick={registerHandler} className="secondary-button">
              הרשמה
            </button>
          </div>

          <div className="form-social">
            <h3>או באמצעות</h3>
            <div className="form-buttons">
              <button id="google" className="social-button">
                <IonIcon aria-hidden="true" icon={logoGoogle} />
                התחברות עם גוגל
              </button>
              <button id="facebook" className="social-button">
                <IonIcon aria-hidden="true" icon={logoFacebook} />
                התחברות עם פייסבוק
              </button>
            </div>
          </div>
        </div>
      </StyledLogin>
    </IonPage>
  );
};

export default Login;
