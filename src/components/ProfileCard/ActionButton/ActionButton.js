import React from 'react';
import StyledActionButton from './StyledActionButton';
import { IonButton, IonIcon, CreateAnimation } from '@ionic/react';
import { closeOutline, heart } from 'ionicons/icons';
import propTypes from 'prop-types';

const ActionButton = (props) => {
const pulseKeyframes = [
    { offset: 0, transform: 'scale(1)', opacity: '1' },
    { offset: 0.5, transform: 'scale(1.2)', opacity: '0.5' },
    { offset: 1, transform: 'scale(1)', opacity: '1' },
 ];

  const unmatchButtonRef = React.useRef(null);
  const matchButtonRef = React.useRef(null);

  const playUnmatchAnimation = () => {
    if(unmatchButtonRef.current !== null){
        unmatchButtonRef.current.animation.play();
    }
  }

    const playMatchAnimation = () => {
    if(matchButtonRef.current !== null){
        matchButtonRef.current.animation.play();
    }
}

  return (
    <StyledActionButton>
      <div className="action-button-container">
        <CreateAnimation
        ref={unmatchButtonRef}
        duration={1000}
        iterations={1}
        keyframes={pulseKeyframes}
        play={props.animateUnmatchButton}
        stop={!props.animateUnmatchButton}
        >
          <IonButton className="unmatch"fill="solid" onClick={()=>playUnmatchAnimation()}>
            <IonIcon icon={closeOutline}></IonIcon>
          </IonButton>
        </CreateAnimation>
      
       <CreateAnimation
        ref={matchButtonRef}
        duration={1000}
        iterations={1}
        keyframes={pulseKeyframes}
        play={props.animateMatchButton}
        stop={!props.animateMatchButton}
        >
          <IonButton className="match" fill="solid"onClick={()=>playMatchAnimation()} >
            <IonIcon icon={heart}></IonIcon>
          </IonButton>
        </CreateAnimation>
      
      </div>
    </StyledActionButton>
  );
};

export default ActionButton;
ActionButton.propTypes = {
    animateUnmatchButton: propTypes.bool,
    animateMatchButton: propTypes.bool, 
}
