import React, { useState } from 'react';
import StayledJobSearch from './StayledJobSearch';
import { IonButton, IonTitle } from '@ionic/react';
import dogsitter from '../../../assets/dogsitter.jpg';
import dogwolker from '../../../assets/dogwolker.jpg';

function JobSearch() {
  const [selectedService, setSelectedService] = useState(null);

  function handleClick(service) {
    setSelectedService(service);
  }

  function getNextHref() {
    if (selectedService === 'dog-sitting') {
      return '/my/DogSitterService'
    } else {
      return '/my/DogWalkerService';
    }
  }

  return (
    <StayledJobSearch>
      <IonTitle>Creating a job application:</IonTitle>

      <div
        className={`dogsitter ${selectedService === 'dog-sitting' ? 'selected' : ''}`}
        onClick={() => handleClick('dog-sitting')}
      >
        <h1>Dog-Sitter</h1>
        <div className='img'>
          <img src={dogsitter} alt='logo' />
        </div>
        <div className='text'>
          <span>Keeping and caring for the dog for several days</span>
        </div>
      </div>

      <div
        className={`dogwolker ${selectedService === 'dog-walking' ? 'selected' : ''}`}
        onClick={() => handleClick('dog-walking')}
      >
        <h1>Dog-Walker</h1>
        <div className='img'>
          <img src={dogwolker} alt='logo' />
        </div>
        <h2>--Or--</h2>
        <div className='text'>
          <span>A walk with the dog</span>
        </div>
      </div>

      <div className='button'>
        <IonButton color='primary' href={getNextHref()}>
          Next
        </IonButton>
      </div>      
    </StayledJobSearch>
  );
}

export default JobSearch;
