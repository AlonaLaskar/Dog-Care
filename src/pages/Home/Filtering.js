import React from 'react';
import { IonSelect, IonSelectOption, IonRange, IonLabel } from '@ionic/react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Filtering = ({ filterDistance, setFilterDistance, filterHourlyRate, setFilterHourlyRate }) => {
  console.log('filterDistance', filterDistance);
  console.log('filterHourlyRate', filterHourlyRate);

  return (
    <>
      <IonRange
        value={filterDistance}
        labelPlacement="distance"
        min={0}
        max={100}
        pin={true}
        className="distance"
        pinFormatter={(value) => `${value} km`}
        onIonChange={(e) => setFilterDistance(e.detail.value)}
      >
        <IonLabel slot="start">distance</IonLabel>

        <IonLabel slot="start">0</IonLabel>
        <IonLabel slot="end">100</IonLabel>
      </IonRange>

      <IonRange
        value={filterHourlyRate}
        labelPlacement="payment"
        min={0}
        max={300}
        pin={true}
        className="payment"
        pinFormatter={(value) => `${value}₪`}
        onIonChange={(e) => setFilterHourlyRate(e.detail.value)}
      >
        <IonLabel slot="start">payment</IonLabel>
        <IonLabel slot="start">0</IonLabel>
        <IonLabel slot="end">300</IonLabel>
      </IonRange>
    </>
  );
};

export default Filtering;

Filtering.propTypes = {
  filterDistance: PropTypes.number.isRequired,
  setFilterDistance: PropTypes.func.isRequired,

  filterHourlyRate: PropTypes.number.isRequired,
  setFilterHourlyRate: PropTypes.func.isRequired
};
