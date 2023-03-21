
import StyledAttendaceClock from './StyledAttendaceClock';
import Timer from './Timer';
import ManualFeed from './ManualFeed';
import DisplayFeed from './DisplayFeed';


const AttendaceClock = () => {
  return (
    <StyledAttendaceClock>
      <ManualFeed />
      <DisplayFeed />
      <Timer />
    </StyledAttendaceClock>
  );
};

export default AttendaceClock;
