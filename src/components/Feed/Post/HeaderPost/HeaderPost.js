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
import StyledHeaderPost from './StyledHeaderPost';

export default function HeaderPost({ post }) {
  const { uid, date } = post;

  const { user, isLoading } = useUser(uid);
  console.log()

  if (isLoading) return 'Loading...';
  return (
    <StyledHeaderPost>
      <IonHeader>
        <Avatar user={user} />
        <IonText>
          {formatDistanceToNow(date) + ' ago'}
        </IonText>
      </IonHeader>
  </StyledHeaderPost>
  );
}
HeaderPost.propTypes = {
  post: PropTypes.any
};
