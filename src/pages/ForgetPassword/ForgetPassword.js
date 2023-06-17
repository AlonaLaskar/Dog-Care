//!React
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
//!Firebase
import { auth } from '../../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
//!Ionic
import { IonInput, IonButton,IonLabel, IonText, IonContent } from '@ionic/react';
//!Style
import LOGO from '../../assets/LOGO.png';
import StyledForgetPassword from './StyledForgetPassword';
//!Custom hook
import useToast from '../../hook/useToast';

const ForgotPassword = () => {
  const presentToast = useToast();

  const [email, setEmail] = useState('');
  const [validationError] = useState('');

  const history = useHistory();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      presentToast('Please enter a valid email address.', false);
      return;
    }

    // Send password reset email
    try {
      await sendPasswordResetEmail(auth, email);
      presentToast('Password reset email sent successfully!', true);
      history.push('/login');
    } catch (error) {
      presentToast(error.message, false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <StyledForgetPassword>
      <IonContent>
        <div className="contener">
          <img src={LOGO} alt="LOGO" />
          <IonLabel className="restartTitle">Reset Password</IonLabel>
          <IonText className="text">your email address and we will send you a link to reset your</IonText>

          <form onSubmit={handleFormSubmit}>
            <IonInput
              className="input"
              type="email"
              placeholder="Email"
              value={email}
              onIonChange={handleEmailChange}
              required
            />
            {validationError && <div className="validation-error">{validationError}</div>}
            <IonButton className="restart" type="submit" expand="block" fill="clear">
              Reset Password
            </IonButton>
            <div className="toLogin">
              <Link to="/login">Back to Login</Link>
            </div>
          </form>
        </div>
      </IonContent>
    </StyledForgetPassword>
  );
};

export default ForgotPassword;
