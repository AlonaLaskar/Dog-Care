import { IonList, IonAvatar, IonIcon, IonText, IonImg } from '@ionic/react';
import { calendarNumberOutline, alarmOutline, cashOutline, locationOutline } from 'ionicons/icons';
import StyledPeopleULike from './StyledPeopleULike';

import { useContext, useEffect, useState } from 'react';
import AuthContext from 'providers/AuthContext';
import PropTypes from 'prop-types';
import { checkUserRightSwipe } from '../../../hook/swips';
import { getAvailability } from '../../../hook/availabilityHook';
import { getUser } from '../../../hook/users';

function PeopleULike({ swipesData }) {
  const { userId } = useContext(AuthContext) || {};
  const [swipesIds, setSwipesIds] = useState([]);
  const [userAvailabilities, setUserAvailabilities] = useState([]);
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const fetchSwipesIds = async () => {
      const ids = [];
      for (const swipe of swipesData) {
        const swipesId = await checkUserRightSwipe(swipe?.availabilityId, userId);
        if (swipesId) {
          ids.push(...swipesId);
        } else {
          return null;
        }
      }
      setSwipesIds(ids);
    };

    fetchSwipesIds();
  }, [swipesData, userId]);

  useEffect(() => {
    const fetchAvailabilityAndUserDetails = async () => {
      try {
        const availabilitiesPromises = swipesIds.map((swipe) => getAvailability(swipe.swipeId));
        const usersPromises = swipesIds.map((swipe) => getUser(swipe.userIdAv));

        const availabilities = await Promise.all(availabilitiesPromises);
        const users = await Promise.all(usersPromises);

        setUserAvailabilities(availabilities);
        setUserDetails(users);
      } catch (error) {
        console.error('An error occurred while fetching availability and user details:', error);
      }
    };

    fetchAvailabilityAndUserDetails();
  }, [swipesIds]);

  return (
    <StyledPeopleULike>
      <div className="title">
        <span>Availability you like </span>
      </div>

      {userDetails.map((user, index) => (
        <IonList key={index}>
          <div className='userinfo-header'>
            <IonAvatar slot="start">
              <IonImg src={user?.avatar} />
            </IonAvatar>{' '}
            <div>
              <IonText className='name'>{user?.fullName}</IonText>
              <IonText className="role">{userAvailabilities[index]?.role}</IonText>
            </div>
          </div>
          <div className="city">
            <IonText>
              <IonIcon icon={locationOutline} />
              {user?.location}
            </IonText>
          </div>
          <div className="date">
            <IonText>
              <IonIcon icon={calendarNumberOutline} />
              {userAvailabilities[index]?.dateStart}
              <span> - </span>
              {userAvailabilities[index]?.dateStop}
            </IonText>
          </div>
          <div className="time">
            <IonText>
              <IonIcon icon={alarmOutline} />
              {userAvailabilities[index]?.start} <span> - </span> {userAvailabilities[index]?.stop}
            </IonText>
          </div>
          <div className="payment">
            <IonText>
              <IonIcon icon={cashOutline} />
              {userAvailabilities[index]?.payment}₪ (cash)
            </IonText>
          </div>
        </IonList>
      ))}
    </StyledPeopleULike>
  );
}

export default PeopleULike;
PeopleULike.propTypes = {
  swipesData: PropTypes.any
};
