import React from 'react';
import NewAvailability from 'components/Availability/NewAvailability';
import { IonText } from '@ionic/react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import AuthContext from 'providers/AuthContext';
import { Virtuoso } from 'react-virtuoso';

export default function AvailabilityList({ availabilitys }) {
  const { userId } = useContext(AuthContext) || {};

  const filteredAvailabilitys = availabilitys.filter(
    (availabilityId) => availabilityId.userId === userId
  );

  const hasAvailabilitys = filteredAvailabilitys.length > 0;

  return (
    <>
     {hasAvailabilitys ? (
  <Virtuoso
    data={filteredAvailabilitys}
    itemContent={(index, availabilityId) => 
      <NewAvailability
        key={availabilityId.availabilityId}
        availability={availabilityId}
      />
    }
  />
) : (
  <IonText className="no-posts">
    Boring here! Write an availability...
  </IonText>
)}

    </>
  );
}

AvailabilityList.propTypes = {
  availabilitys: PropTypes.any,
};
