import StyledFromInput from './StyledFromInput';
import { IonInput, IonLabel, IonNote } from '@ionic/react';
import PropTypes from 'prop-types';

// Reusable Input component
const FormInput = ({ label, name, type, register, errors }) => {
  return (
    <div>
      <div className={label}>
      <span >{label}</span>
      </div>
      <IonInput position="stack" type={type} {...register(name)}></IonInput>
      {errors[name] && <IonNote slot="error">{errors[name].message}</IonNote>}
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object
};

export default FormInput;
