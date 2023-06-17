import React from 'react';
import { IonRange, IonLabel,IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';

import PropTypes from 'prop-types';

const Filtering = ({ filterDistance, setFilterDistance, filterHourlyRate, setFilterHourlyRate }) => {
  console.log('filterDistance', filterDistance);
  console.log('filterHourlyRate', filterHourlyRate);

  return (
    <>
      <div className="filter-modal-title">
        <h3>Filters</h3>
      </div>

      <IonRange
        value={filterHourlyRate}
        labelPlacement="payment"
        min={0}
        max={300}
        pin={true}
        className="payment"
        pinFormatter={(value) => `${value}₪`}
        onIonChange={(e) => setFilterHourlyRate(e.detail.value)}
        style={{
          // '--bar-background-active': '#024C71',
          // '--bar-background-hover': '#024C71',
          // '--bar-background': '#024C71',
          // '--bar-height': '4px',
          // '--bar-border-radius': '10px',
          // '--knob-background': '#024C71',
          // '--knob-border-radius': '10px'
        }}
      >
        <IonLabel slot="start" className="payment">
          payment
        </IonLabel>
        <IonLabel slot="start">0</IonLabel>
        <IonLabel slot="end">300</IonLabel>
      </IonRange>

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
      <IonList>
        <IonItem detail={false} lines="full">
          <IonSelect interface="popover" placeholder="Select One Option">
            <IonSelectOption value="sitter">Dog Sitter</IonSelectOption>
            <IonSelectOption value="walker">Dog Walker</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonList>
  
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
