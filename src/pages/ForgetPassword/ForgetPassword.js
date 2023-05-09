import React, { useState } from 'react';
import {IonInput, IonButton, IonToast } from '@ionic/react';
import {auth} from '../../firebase';
import StyledForgetPassword from './StyledForgetPassword';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useHistory } from 'react-router-dom';


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
        <h1>Reset Password</h1>
        <span>Enter your email address and we will send you a link to reset your password.</span>
        <br />
      
        <form onSubmit={handleFormSubmit}>
          <IonInput
            type="email"
            placeholder="Email"
            value={email}
            onIonChange={handleEmailChange}
            required
          />
          {validationError && <div className="validation-error">{validationError}</div>}
          <IonButton type="submit" expand="block">
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
