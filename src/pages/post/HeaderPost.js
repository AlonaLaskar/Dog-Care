import { useUser } from '../../hook/users';
import Avatar from '../../pages/Profile/Avatar';
import { formatDistanceToNow } from 'date-fns';
import { IonText, IonHeader } from '@ionic/react';
import PropTypes from 'prop-types';

export default function HeaderPost({ post }) {
  const { uid, date } = post;
  const { user, isLoading } = useUser(uid);

  if (isLoading) return 'נטען...';
  return (
    <div className="post-header">
      <IonHeader
        style={{
          
        }}
      >
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
