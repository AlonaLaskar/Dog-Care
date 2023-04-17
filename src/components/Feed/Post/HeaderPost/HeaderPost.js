//! Ionic components
import { IonText, IonHeader } from '@ionic/react';
//! Custom Hooks
import { formatDistanceToNow } from 'date-fns';
//!prop-types
import PropTypes from 'prop-types';
//! Components
import { useUser } from '../../../../hook/users';
import Avatar from '../../../Profile/Avatar';
//! Styled Components
import StyledHeader from './StyledHeader';

export default function Header({ post }) {
  const { uid, date } = post;

  const { user, isLoading } = useUser(uid) || {};


  if (isLoading) return 'Loading...';

  return (
    <StyledHeader>
      <IonHeader>
        <Avatar user={user} />
        <IonText>
          {formatDistanceToNow(date) + ' ago'}
        </IonText>
      </IonHeader>
  </StyledHeader>
  );
}
Header.propTypes = {
  post: PropTypes.any
};
