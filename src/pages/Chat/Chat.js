import React from 'react';
import { useavAilabilitys } from '../../hook/availabilityHook';
import AvailabilityList from '../../components/Availability/AvailabilityList';
import NewAvailability from 'components/Availability/NewAvailability';

export default function Example() {

  const { availabilitys, isLoading } = useavAilabilitys();
  if (isLoading) return 'Loading...';

  return(
    <div >
      {/* <AvailabilityList availabilitys={availabilitys} /> */}
      <NewAvailability availability={availabilitys} />
    </div>
  )


  }


