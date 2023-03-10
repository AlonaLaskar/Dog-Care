import StyledRegister from './StyledRegister';
import { useState } from 'react';
import { useHistory  } from 'react-router-dom';
import { IonItem, IonLabel, IonInput, IonNote } from '@ionic/react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [gender, setGender] = useState('');
  const [datOfBirth, setDatOfBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [serviceProvider, setServiceProvider] = useState('');
  const [error, setError] = useState('');                 
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null); // New state for storing image

  const handleSubmit = async (e) => {
    const history = useHistory();
    e.preventDefault();
    if (password !== password2) {
      setError('אין התאמה בין הסיסמאות');
    } else {
      try {
        setError('');
        setLoading(true);
        await Register(email, password, name, surname);
        //history.push('/tabs/tab1');
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    }
  };
  const registerHandler = () => {
    console.log('Register');
  };

  return (
    <StyledRegister>
      <div className="form">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}> 

          <div className="form-group">
            <IonItem counter={true}>
              <IonLabel position="floating">כתובת מייל</IonLabel>
              <IonInput type="email" value={email} onChange={(e) => setEmail(e.target.value)}></IonInput>
          
              <IonNote slot="error">איימל לא תקין</IonNote>
            </IonItem>
         
          <IonItem counter={true}>
            <IonLabel position="floating">סיסמא</IonLabel>
            <IonInput type="password" value={password} onChange={(e) => setPassword(e.target.value)}></IonInput> 
            <IonNote slot="error">סיסמא לא תקינה</IonNote>
          </IonItem>
          <IonItem counter={true}>
            <IonLabel position="floating">אימות סיסמא</IonLabel>
            <IonInput type="password"  value={password2} onChange={(e) => setPassword2(e.target.value)}></IonInput>
            <IonNote slot="error">סיסמא לא תקינה</IonNote>
          </IonItem>
          <IonItem counter={true}>  
            <IonLabel position="floating">שם פרטי</IonLabel>
            <IonInput type="text" value={name} onChange={(e) => setName(e.target.value)}></IonInput>
            <IonNote slot="error">שם פרטי לא תקין</IonNote>
          </IonItem>
          <IonItem counter={true}>
            <IonLabel position="floating">שם משפחה</IonLabel>
            <IonInput type="text" value={surname} onChange={(e) => setSurname(e.target.value)}></IonInput>
            <IonNote slot="error">שם משפחה לא תקין</IonNote>
          </IonItem>
          <IonItem counter={true}>
            <IonLabel position="floating">מין</IonLabel>
            <IonInput type="text" value={gender} onChange={(e) => setGender(e.target.value)}></IonInput>
            <IonNote slot="error">מין לא תקין</IonNote> 
          </IonItem>
          <IonItem counter={true}>
            <IonLabel position="floating">תאריך לידה</IonLabel>
            <IonInput type="date" value={datOfBirth} onChange={(e) => setDatOfBirth(e.target.value)}></IonInput>
            <IonNote slot="error">תאריך לידה לא תקין</IonNote>
          </IonItem>
          <IonItem counter={true}>
            <IonLabel position="floating">טלפון</IonLabel>
            <IonInput type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}></IonInput>
            <IonNote slot="error">טלפון לא תקין</IonNote>
          </IonItem>
          <IonItem counter={true}>  
            <IonLabel position="floating">עיר</IonLabel>
            <IonInput type="text"  value={city} onChange={(e) => setCity(e.target.value)}></IonInput>
            <IonNote slot="error">עיר לא תקינה</IonNote>
          </IonItem>

          <IonItem counter={true}>  
            <IonLabel position="floating">כתובת</IonLabel>
            <IonInput type="text" value={address} onChange={(e) => setAddress(e.target.value)}></IonInput>
            <IonNote slot="error">כתובת לא תקינה</IonNote>
          </IonItem>

          <IonItem counter={true}>  
            <IonLabel position="floating">איזור מתן שירות</IonLabel>
            <IonInput  value={serviceProvider} onChange={(e) => setServiceProvider(e.target.value)}></IonInput>
            <IonNote slot="error">כתובת לא תקינה</IonNote>
         
          </IonItem>


          </div>
          <div className="form-group">
            <input
              placeholder="תמונה"
              type="file"
              id="image"
              accept=".png,.jpg,.jpeg"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <div className="form-buttons">
            <button onClick={registerHandler} className="primary-button">
              הרשמה
            </button>
          </div>

          {error && <p>{error}</p>}
        </form>
      </div>
    </StyledRegister>
  );
};

export default Register;
