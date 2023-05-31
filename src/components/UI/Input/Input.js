import { useContext } from 'react';
import { IonInput } from '@ionic/react';
import FormContext from 'providers/FormContext';
import StyledInput from './StyledInput';
import PropTypes from 'prop-types';
import useToast from 'hook/useToast';


const Input = ({ id, type = id, title, validateHandler }) => {
  const { register, errors } = useContext(FormContext);
  console.log('errors', errors);
  const presentToast = useToast();


  if (id === 'aboutMe') {
    return (
      <StyledInput>
        <IonInput
          className={id}
          type={type}
          clearInput={true}
          counter={true}
          maxlength={100}
          aria-label
          placeholder="Help us get to know you better..."
          {...register(id, validateHandler)}
        />
        {errors[id] && presentToast(errors[id]?.message, false)}
      </StyledInput>
    );
  }

  return (
    <StyledInput>
      <IonInput className={id} type={type} placeholder={title} {...register(id, validateHandler)} />
      {errors[id] && presentToast(errors[id]?.message, false)}
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
