import React from 'react';
import { IonRange, IonLabel, IonRadioGroup, IonRadio, IonDatetime, IonDatetimeButton, IonModal } from '@ionic/react';
import PropTypes from 'prop-types';

const Filtering = ({
  filterDistance,
  setFilterDistance,
  filterHourlyRate,
  setFilterHourlyRate,
  filterRole,
  setFilterRole,
  filterDate,
  setFilterDate,
  filterDateEnd,
  setFilterDateEnd
}) => {
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
        mode='ios'
        pin={true}
        className="payment"
        pinFormatter={(value) => `${value}₪`}
        onIonChange={(e) => setFilterHourlyRate(e.detail.value)}
        style={{ '--knob-background': '#024C71' }}
      >
        <IonLabel slot="start" className="payment">
          Payment
        </IonLabel>
        <IonLabel slot="start">0</IonLabel>
        <IonLabel slot="end">300</IonLabel>
      </IonRange>

      <IonRange
        value={filterDistance}
        labelPlacement="distance"
        mode='ios'
        min={0}
        max={100}
        pin={true}
        style={{ '--knob-background': '#024C71' }}
        className="distance"
        pinFormatter={(value) => `${value} km`}
        onIonChange={(e) => setFilterDistance(e.detail.value)}
      >
        <IonLabel slot="start">Distance</IonLabel>
        <IonLabel slot="start">0</IonLabel>
        <IonLabel slot="end">100</IonLabel>
      </IonRange>

      <IonLabel>Role</IonLabel>
      <IonRadioGroup value={filterRole} onIonChange={(e) => setFilterRole(e.detail.value)} mode="md">
        
        <IonRadio value="Dog-Sitter" labelPlacement="end">
          Dog Sitter
        </IonRadio>
        <IonRadio value="Dog-walker" labelPlacement="end">
          Dog Walker
        </IonRadio>
      </IonRadioGroup>

      <IonLabel>Date Start</IonLabel>
      <IonDatetimeButton displayFormat="DD/MM/YYYY" datetime="datetime"></IonDatetimeButton>
      <IonLabel>Date End</IonLabel>
      <IonDatetimeButton displayFormat="DD/MM/YYYY" datetime="datetime"></IonDatetimeButton>
      <IonModal keepContentsMounted={true}>
        <IonDatetime id="datetime" onIonChange={(e) => setFilterDateEnd(e.detail.value)}></IonDatetime>
      </IonModal>
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
  setFilterDateEnd: PropTypes.func.isRequired
};
