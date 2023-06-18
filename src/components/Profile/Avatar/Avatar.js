//!React
import React from 'react';
import { useHistory } from 'react-router-dom';
//! Ionic components
import { IonAvatar, IonChip, IonLabel } from '@ionic/react';
//!prop-types
import PropTypes from 'prop-types';
//! Styled Components
import StyledAvatar from './StyledAvatar';

const Avatar = ({ user = {}, overrideAvatar = null }) => {
  const history = useHistory();

  const handleAvatarClick = () => {
    history.push(`/my/profile/${user.id}`);
  };

//not shrer if this is the best way to do this

if (!user){
  return (
    user.avatar= 'https://static-00.iconduck.com/assets.00/user-avatar-icon-512x512-vufpcmdn.png'
  )
}

  return (
    <StyledAvatar>
    <IonChip color='light' onClick={handleAvatarClick}>
      <IonAvatar>
        <img src={overrideAvatar || user.avatar} alt='Silhouette of a persons head' />
      </IonAvatar>
      <IonLabel color='dark' >{user.username}</IonLabel>
    </IonChip>
    </StyledAvatar>
  );
};

Avatar.propTypes = {
  user: PropTypes.object.isRequired,
  overrideAvatar: PropTypes.string
};

export default Avatar;
