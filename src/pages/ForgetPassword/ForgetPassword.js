import React, { useState } from 'react';
import {IonInput, IonButton, IonToast,IonLabel, IonText } from '@ionic/react';
import {auth} from '../../firebase';
import StyledForgetPassword from './StyledForgetPassword';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import LOGO from '../../assets/LOGO.png';


const ForgotPassword = () => {

  const [email, setEmail] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [validationError, setValidationError] = useState('');

  const history = useHistory();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setValidationError('Please enter a valid email address.');
      setShowToast(true);
      return;
    }
  
    // Send password reset email
    try {
      await sendPasswordResetEmail(auth, email);
      setToastMessage('Password reset email sent successfully!');
      setShowToast(true);
      history.push('/login');
    } catch (error) {
      setToastMessage(error.message);
      setShowToast(true);
    }
  };
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <StyledForgetPassword>
      <div className='contener'>

        <img src={LOGO} alt='LOGO' /> 
  <IonLabel className='restartTitle'>Reset Password</IonLabel>
        <IonText className='text'>
        your email address and we will send you a link to reset your
        </IonText>

        <form onSubmit={handleFormSubmit}>
          <IonInput className='input'
            type='email'
            placeholder='Email'
            value={email}
            onIonChange={handleEmailChange}
            required
          />
          {validationError && <div className='validation-error'>{validationError}</div>}
          <IonButton className="restart" type='submit' expand='block' fill='clear'>
            Reset Password
          </IonButton>
        </form>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={3000}
        />
      </div>
    </StyledForgetPassword>
  );
};

export default ForgotPassword;
