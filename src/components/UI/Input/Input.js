import { useContext } from 'react';
import { IonItem, IonLabel, IonInput, IonNote } from '@ionic/react';
import FormContext from 'providers/FormContext';
import StyledInput from './StyledInput';
import PropTypes from 'prop-types';

const Input = ({ id, type = id, title, placeholder, validateHandler }) => {
  const { register, errors } = useContext(FormContext);

  if (id === 'aboutMe') {
    return (
      <StyledInput>
        <IonInput
          className={id}
          type={type}
          aria-label
          placeholder="Help us get to know you better..."
          {...register(id, validateHandler)}
        />
        {errors[id] && <IonNote slot="error">{errors[id]?.message}</IonNote>}
      </StyledInput>
    );
  }

  return (
    <StyledInput>
      <IonInput className={id} type={type} placeholder={title} {...register(id, validateHandler)} />
      {errors[id] && <IonNote slot="error">{errors[id]?.message}</IonNote>}
    </StyledInput>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  validateHandler: PropTypes.object,
  position: PropTypes.string
};

export default Input;
