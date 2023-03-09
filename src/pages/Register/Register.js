import StyledRegister from './StyledRegister';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
              <IonInput type="email" ngModel email></IonInput>
              <IonNote slot="helper">אנא הזן איימל תקין</IonNote>
              <IonNote slot="error">איימל לא תקין</IonNote>
            </IonItem>
          </div>
          <div className="form-group">
            <input type="text" placeholder="אימייל" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="form-group">
            <input type="password" placeholder="סיסמא" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="אימות סיסמא"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input type="text" placeholder="שם פרטי" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="form-group">
            <input type="text" placeholder="שם משפחה" value={surname} onChange={(e) => setSurname(e.target.value)} />
          </div>

          <div className="form-group">
            <input type="text" placeholder="מין" value={gender} onChange={(e) => setGender(e.target.value)} />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="תאריך לידה"
              value={datOfBirth}
              onChange={(e) => setDatOfBirth(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input type="text" placeholder="פלאפון" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>

          <div className="form-group">
            <input type="text" placeholder="עיר" value={city} onChange={(e) => setCity(e.target.value)} />
          </div>

          <div className="form-group">
            <input type="text" placeholder="כתובת" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="איזור שירות"
              value={serviceProvider}
              onChange={(e) => setServiceProvider(e.target.value)}
            />
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
