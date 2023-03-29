import { useState } from 'react';
import { useRef } from 'react';
import { IonButton, IonLabel, IonItem } from '@ionic/react';
import StyledAttendaceClock from './StyledAttendaceClock';

function Timer() {
const [isRunning, setIsRunning] = useState(false);
const [time, setTime] = useState(0);
const [start, setStart] = useState('');
const [stop, setStop] = useState('');

const intervalRef = useRef(null);

  const handleStart = () => {

    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 250);

    // Set the start time to the current time
    const now = new Date();
    const startTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    setStart(startTime);
    console.log('start'+ start);
  };

  const handleStop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);

    // Set the stop time to the current time
    const now = new Date();
    const stopTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    setStop(stopTime);
    console.log('stop'+ stop);
  };

  return (
    <StyledAttendaceClock>
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
      
     
      </div>      
        <IonLabel>Time: {time}</IonLabel>
    
    </StyledAttendaceClock>
  );
}

export default Timer;