//!React
import React, { useState } from 'react';
import { IonButton, IonTitle } from '@ionic/react';

//!Self-components
import dogwolker from '../../../assets/dogwolker.jpg';
import dogsitter from '../../../assets/dogsitter.jpg';
import StayledJobSearch from './StayledJobSearch';
import DogSitterService from '../../Schedule/DogSitterService';

function JobSearch() {


  const [selectedService, setSelectedService] = useState('');
  const [nextClicked, setNextClicked] = useState(false);
  function handleClick(service) {
    setSelectedService(service);
  }
  function handleNextClick() {
    if (selectedService) {
      setNextClicked(true);
    } else {
      return;
    }
  }
  if (nextClicked) {

    return <DogSitterService selectedService={selectedService} />
  }

  return (
    <StayledJobSearch>
      <IonTitle>Creating a job application:</IonTitle>

      <div
        className={`dogsitter ${selectedService === 'Dog-Sitter' ? 'selected' : ''}`}
        onClick={() => handleClick('Dog-Sitter')}
      >
        <h1>Dog-Sitter</h1>
        <div className='img'>
          <img src={dogsitter} alt='logo' />
        </div>
        <div className='text'>
          <span>Keeping and caring for the dog for several days</span>
        </div>
      </div>
      <h2>--Or--</h2>

      <div
        className={`dogwolker ${selectedService === 'Dog-walker' ? 'selected' : ''}`}
        onClick={() => handleClick('Dog-walker')}
      >
        <h1>Dog-Walker</h1>
        <div className='img'>
          <img src={dogwolker} alt='logo' />
        </div>
        <div className='text'>
          <span>A walk with the dog</span>
        </div>
      </div>

      <div className='button'>
        <IonButton fill='clear' onClick={handleNextClick}>
          Next
        </IonButton>
      </div>
    </StayledJobSearch>
  );
}

export default JobSearch;
