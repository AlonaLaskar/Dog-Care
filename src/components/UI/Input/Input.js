import { useContext } from 'react';
import { IonInput, IonLabel } from '@ionic/react';
import FormContext from 'providers/FormContext';
import StyledInput from './StyledInput';
import PropTypes from 'prop-types';
import useToast from 'hook/useToast';

const Input = ({ id, type, title, label }) => {
  const { register, errors } = useContext(FormContext);

  const presentToast = useToast();

  if (id === 'aboutMe') {
    return (
      <StyledInput>
        {label && <IonLabel className={id} position='stacked'>{label}</IonLabel>}
        <IonInput
          className={id}
          type={type}
          clearInput={true}
          counter={true}
          maxlength={100}
          aria-label
          placeholder={title}
          {...register(id)}
        />
        {errors[id] && presentToast(errors[id]?.message, false)}
      </StyledInput>
    );
  }

  return (
    <StyledInput>
      {label && <IonLabel className={id} position='stacked'>{label}</IonLabel>}
      <IonInput className={id} type={type} placeholder={title} {...register(id)} />
      {errors[id] && presentToast(errors[id]?.message, false)}
    </StyledInput>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  position: PropTypes.string
};

export default Input;
