
import StyledAttendaceClock from './StyledAttendaceClock';
import Timer from './Timer';
import ManualFeed from './ManualFeed';

const AttendaceClock = () => {
  return (
    <StyledAttendaceClock>
      <ManualFeed />
      <Timer />
    </StyledAttendaceClock>
  );
};

export default AttendaceClock;
