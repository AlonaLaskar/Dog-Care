import { useContext } from 'react';
import { IonItem, IonLabel, IonInput, IonNote } from '@ionic/react';

import FormContext from 'providers/FormContext';
import StyledInput from './StyledInput';
import PropTypes from 'prop-types';

const Input = ({ id, type = id, title, placeholder, validateHandler, position = 'stacked' }) => {
  const { register, errors } = useContext(FormContext);

  return (
    <StyledInput>
      <IonItem>
        <IonLabel position={position}>{title}</IonLabel>
        <IonInput type={type} placeholder={placeholder} {...register(id, validateHandler)} />
      </IonItem>
      {errors[id] && <IonNote slot="error">{errors[id]?.message}</IonNote>}
    </StyledInput>
  );
};

Input.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
  id: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  validateHandler: PropTypes.object,
  position: PropTypes.string
};

export default Input;
