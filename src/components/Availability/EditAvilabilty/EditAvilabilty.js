import StylesEditAvilabilty from "./StylesEditAvilabilty.js";
import { useState } from 'react';
import { useEditAvailability } from 'hook/availabilityHook';
import PropTypes from 'prop-types';

const EditAvilabilty = ({ availability }) => {
    console.log('availability', availability);
  const [formData, setFormData] = useState({
    // Initialize the form data with the availability details
    dateStart: availability.dateStart,
    dateStop: availability.dateStop,
    start: availability.start,
    stop: availability.stop,
    payment: availability.payment,
    location: availability.location,
    aboutMe: availability.aboutMe,
  });

  const { editAvailability, isLoading: editLoading } = useEditAvailability(availability.availabilityId);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the editAvailability function from the hook and pass the updated form data
    editAvailability(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <StylesEditAvilabilty>
      <h1>Edit Availability</h1>
      <form onSubmit={handleSubmit}>
        {/* Render the input fields with the form data */}
        <input
          type="date"
          name="dateStart"
          value={formData.dateStart}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dateStop"
          value={formData.dateStop}
          onChange={handleChange}
        />
        {/* Render other input fields here */}
        {/* ... */}
        <button type="submit" disabled={editLoading}>
          Save Changes
        </button>
      </form>
    </StylesEditAvilabilty>
  );
};

EditAvilabilty.propTypes = {
  availability: PropTypes.any,
};

export default EditAvilabilty;
