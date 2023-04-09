import React from 'react';
import { IonItem, IonIcon, IonLabel, IonInput } from '@ionic/react';
import PropTypes from 'prop-types';
const InputField = ({ icon, label, value, onChange }) => {
  return (
    <IonItem>
      <IonIcon slot="start" icon={icon} />
      <IonLabel position="floating">{label}</IonLabel>
      <IonInput value={value} onIonChange={onChange} />
    </IonItem>
  );
};

export default InputField;
InputField.propTypes = {
    icon: PropTypes.object,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};
