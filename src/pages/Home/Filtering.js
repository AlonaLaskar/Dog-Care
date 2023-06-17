import React from 'react';
import { IonRange, IonLabel, IonRadioGroup, IonRadio, IonDatetime } from '@ionic/react';
import PropTypes from 'prop-types';

const Filtering = ({ filterDistance, setFilterDistance, filterHourlyRate, setFilterHourlyRate, filterRole, setFilterRole, filterDate, setFilterDate,filterDateEnd,setFilterDateEnd }) => {

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
        style={{'--knob-background': '#024C71'}}
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
        style={{'--knob-background': '#024C71'}}
        className="distance"
        pinFormatter={(value) => `${value} km`}
        onIonChange={(e) => setFilterDistance(e.detail.value)}
      >
        <IonLabel slot="start">distance</IonLabel>
        <IonLabel slot="start">0</IonLabel>
        <IonLabel slot="end">100</IonLabel>
      </IonRange>

    <IonLabel>Role</IonLabel>
      <IonRadioGroup 
        value={filterRole}
        onIonChange={(e) => setFilterRole(e.detail.value)}
        mode="md"
      >
        <IonRadio value="Dog-Sitter" labelPlacement="end">
          Dog Sitter
        </IonRadio>
        <IonRadio value="Dog-walker" labelPlacement="end">
          Dog Walker
        </IonRadio>
      </IonRadioGroup>

      <IonLabel>Date start</IonLabel>
      <IonDatetime
        displayFormat="DD/MM/YYYY"
        value={filterDateEnd}
        onIonChange={(e) => setFilterDateEnd(e.detail.value)}
      ></IonDatetime>
      
      <IonLabel>Date stop</IonLabel>
      <IonDatetime
        displayFormat="DD/MM/YYYY"
        value={filterDate}
        onIonChange={(e) => setFilterDate(e.detail.value)}
      ></IonDatetime>

    </>
  );
};

export default Filtering;

Filtering.propTypes = {
  filterDistance: PropTypes.number.isRequired,
  setFilterDistance: PropTypes.func.isRequired,
  filterHourlyRate: PropTypes.number.isRequired,
  setFilterHourlyRate: PropTypes.func.isRequired,
  filterRole: PropTypes.string.isRequired,
  setFilterRole: PropTypes.func.isRequired,
  filterDate: PropTypes.string.isRequired,
  setFilterDate: PropTypes.func.isRequired,
  filterDateEnd: PropTypes.string.isRequired,
  setFilterDateEnd: PropTypes.func.isRequired,
};
