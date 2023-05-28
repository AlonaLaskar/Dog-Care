import { IonInput } from '@ionic/react';
import PropTypes from 'prop-types';
import useToast from 'hook/useToast';

// Reusable Input component
const FormInput = ({ label, name, type, register, errors }) => {
  const presentToast = useToast();

  return (
    <div>
      <div className={label}>
        <span>{label}</span>
      </div>
      <IonInput position="stack" type={type} {...register(name)}></IonInput>
      {errors[name] && presentToast(errors[name]?.message, false)}
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
