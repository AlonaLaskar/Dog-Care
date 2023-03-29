import React from 'react';
import { IonAvatar, IonChip, IonLabel } from '@ionic/react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function Avatar({ user, overrideAvatar = null }) {
  const history = useHistory();

  const handleAvatarClick = () => {
    history.push(`/my/profile/${user.id}`);
  };

  return (
    <IonChip style={{ alignItems: 'center', padding: '5%', backgroundColor: 'white' }}>
      <IonAvatar
        style={{ width: '50px', height: '50px', border: '0.5px solid rgb(227, 213, 202)' }}
        onClick={handleAvatarClick}
      >
        <img
          src={overrideAvatar || user.avatar}
          style={{
            width: '50px',
            height: '50px'
          }}
        />
        <IonLabel>{user.username}</IonLabel>
      </IonAvatar>
    </IonChip>
  );
}

Avatar.propTypes = {
  user: PropTypes.object.isRequired,
  overrideAvatar: PropTypes.string
};
