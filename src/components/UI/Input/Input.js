import PropTypes from 'prop-types';
import StyledInput from './StyledInput';

const Input = ({ register, errors, id, title, placeholder, validateHandler }) => {
  return (
    <StyledInput>
      <label htmlFor={id}>{title}</label>
      <input id={id} type={id} placeholder={placeholder} {...register(id, validateHandler)} />
      {errors[id] && <div className="error">{errors[id]?.message}</div>}
    </StyledInput>
  );
};

Input.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
  id: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  validateHandler: PropTypes.object
};

export default Input;
