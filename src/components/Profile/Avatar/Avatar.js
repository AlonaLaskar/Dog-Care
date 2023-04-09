import React from 'react';
import { IonAvatar, IonChip, IonLabel } from '@ionic/react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const Avatar = ({ user = {}, overrideAvatar = null }) => {
  const history = useHistory();

  const handleAvatarClick = () => {
    history.push(`/my/profile/${user.id}`);
  };

  return (
    <IonChip color="light" onClick={handleAvatarClick}>
      <IonAvatar style={{ border: '0.5px solid rgb(227, 213, 202)', width: '40px', height: '40px' }}>
        <img src={overrideAvatar || user.avatar} alt="Silhouette of a person's head" />
      </IonAvatar>
      <IonLabel color="dark">{user.username}</IonLabel>
    </IonChip>
  );
};

Avatar.propTypes = {
  user: PropTypes.object.isRequired,
  overrideAvatar: PropTypes.string
};

export default Avatar;
