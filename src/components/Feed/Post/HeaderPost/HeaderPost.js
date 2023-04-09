//! Ionic components
import { IonText, IonHeader } from '@ionic/react';
//! Custom Hooks
import { formatDistanceToNow } from 'date-fns';
//!prop-types
import PropTypes from 'prop-types';
//! Components
import { useUser } from '../../../../hook/users';
import Avatar from '../../../Profile/Avatar'

export default function HeaderPost({ post }) {
  const { uid, date } = post;

  const { user, isLoading } = useUser(uid);

  if (isLoading) return 'נטען...';
  return (
    <div className="post-header">
      <IonHeader>
        <Avatar user={user} />
        <IonText
          style={{
            fontSize: '12px',
            color: 'gray.500',
            fontWeight: 'bold'
          }}
        >
          {formatDistanceToNow(date) + ' ago'}
        </IonText>
      </IonHeader>
    </div>
  );
}
HeaderPost.propTypes = {
  post: PropTypes.any
};
