//!Components
import Timer from '../../components/Schedule/Timer/Timer';
import ManualSchedule from '../../components/Schedule/ManualSchedule';
import DisplaySchedule from '../../components/Schedule/DisplaySchedule';
//!Styles
import StyledSchedule from './StyledSchedule';

const Schedule = () => {
  return (
    <StyledSchedule>
      <ManualSchedule />
      {/* <DisplaySchedule />
      <Timer /> */}
    </StyledSchedule>
  );
};

export default Schedule;
