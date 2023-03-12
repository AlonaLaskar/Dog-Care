import { useState, useRef } from 'react';
import { IonButton, IonInput, IonLabel, IonItem, IonNote } from '@ionic/react';
import StyledAttendaceClock from './StyledAttendaceClock';

function Timer() {
    const [time, setTime] = useState(0);
    const [owner,setOwner]=useState('');
    const [isRunning, setIsRunning] = useState(false);
    const [start, setStart] = useState('');
    const [stop, setStop] = useState('');
    const [date, setDate] = useState('');
    const [payment, setPayment] = useState('');
  
    const intervalRef = useRef(null);
  
    const handleStart = () => {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      },250 );
    
      // Set the start time to the current time
      const now = new Date();
      const startTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
      setStart(startTime);
    };
  
    const handleStop = () => {
      setIsRunning(false);
      clearInterval(intervalRef.current);
  
      // Set the stop time to the current time
      const now = new Date();
      const stopTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
      setStop(stopTime);
    };
  
    const handlePayment = () => {
      const startHour = parseInt(start.split(':')[0]);
      const startMinute = parseInt(start.split(':')[1]);
      const stopHour = parseInt(stop.split(':')[0]);
      const stopMinute = parseInt(stop.split(':')[1]);
  
      // Validate inputs
      if (isNaN(startHour) || isNaN(startMinute) || isNaN(stopHour) || isNaN(stopMinute)) {
        alert('Invalid start or stop time format. Please use "HH:MM" format.');
        return;
      }
      if (parseFloat(payment) <= 0 || isNaN(parseFloat(payment))) {
        alert('Invalid hourly rate. Please enter a positive number.');
        return;
      }
  
      // Calculate the total time worked in minutes
      const totalTime = (stopHour - startHour) * 60 + (stopMinute - startMinute);
  
      // Calculate the payment based on the hourly rate and total time worked
      try {
        const hourlyRate = parseFloat(payment);
        const paymentAmount = (hourlyRate * totalTime) / 60;
        if (paymentAmount < 0) {
          alert('End time must be greater than start time.');
          setPayment('');
        } else {
          setPayment(paymentAmount.toFixed(2));
        }
      } catch (error) {
        alert('An error occurred while calculating the payment.');
        console.error(error);
      }
    };
  
  return (
    <StyledAttendaceClock>
      <div className='contener'>
        <div className='owner'>
            <IonItem counter={true}>
                <IonLabel position='floating'>שם הבעלים</IonLabel>
                <IonInput type='text' value={owner} onIonChange={(e) => setOwner(e.detail.value)}></IonInput>
                <IonNote slot='error'> שם לא תקין</IonNote>
            </IonItem>
            {owner && <p>שם הבעלים: {owner}</p>}
        </div>
        <div className='date'>
            <IonItem counter={true}>
                <IonLabel position='floating'>תאריך</IonLabel>
                <IonInput type='date' value={date} onIonChange={(e) => setDate(e.detail.value)}></IonInput>
                <IonNote slot='error'> תאריך לא תקין</IonNote>
            </IonItem>
            {date && <p>תאריך: {date}</p>}
        </div>
            <div className='from'>
          <IonItem counter={true}>
            <IonLabel position='floating'>זמן התחלה</IonLabel>
            <IonInput type='time' value={start} onIonChange={(e) => setStart(e.detail.value)}></IonInput>
            <IonNote slot='error'> זמן לא תקין</IonNote>
          </IonItem>

        </div>
        <div className='to'>
          <IonItem counter={true}>
            <IonLabel position='floating'>זמן סיום</IonLabel>
            <IonInput type='time' value={stop} onIonChange={(e) => setStop(e.detail.value)}></IonInput>
            <IonNote slot='error'> זמן לא תקין</IonNote>
          </IonItem>
        </div>
        <div className='payment'>
          <IonItem counter={true}>
          <IonLabel position='floating'>שכר לשעה</IonLabel>
            <IonInput
             type='number' 
             value={payment}
             onIonChange={(e) => setPayment(e.detail.value)}
             ></IonInput>
            <IonNote slot='error'> שעה לא תקינה</IonNote>
          </IonItem>
        </div>
        <div className='buttom'>
        {!isRunning ? (
          <IonButton
           color='success'
          
          onClick={handleStart}>התחלת משמרת</IonButton>
        ) : (
          <IonButton
          color='danger'
          onClick={handleStop}>סיום משמרת</IonButton>
             
        )}
        <IonButton onClick={handlePayment}>לחישוב תשלום</IonButton>
     
      </div>      
      </div>
    </StyledAttendaceClock>
  );
}

export default Timer;
