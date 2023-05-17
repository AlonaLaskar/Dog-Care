import React, { useState } from 'react';
import StayledJobSearch from './StayledJobSearch';
import { IonButton, IonTitle } from '@ionic/react';
import dogsitter from '../../../assets/dogsitter.jpg';
import dogwolker from '../../../assets/dogwolker.jpg';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import AuthContext from 'providers/AuthContext';
import { useContext } from 'react';

function JobSearch() {
  const { userId } = useContext(AuthContext) || {};

  const [selectedService, setSelectedService] = useState(null);

  function handleClick(service) {
    setSelectedService(service);
  }
//update the user role in the database
  async function updatePageStatus() {
    const userRefUpdate = doc(db, 'users', userId);
    await updateDoc(userRefUpdate, {
      role: selectedService,
    });
  }
//update the user and move on to the next page
  function getNextHref() {
    updatePageStatus();
    return '/my/DogSitterService';
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
