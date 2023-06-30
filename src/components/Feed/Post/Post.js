import { IonAvatar, IonCard, IonCardContent, IonImg, IonLabel } from '@ionic/react';
import Action from './ActionsPost';
import StyledPost from './StyledPost';
import PropTypes from 'prop-types';
import { useUser } from 'hook/users';
import { formatDistanceToNow } from 'date-fns';

export default function Post({ post }) {
  const { uid, date,photo } = post;


  const { user} = useUser(uid) || {};

  return (
    <StyledPost>
      <IonCard className="postcard">
        <IonCardContent>
          <div className="cardheader">
            <IonAvatar>
              <img src={user?.avatar} alt={user?.fullName} />
            </IonAvatar>
            <div className="card-right-content">
              <div className="user-info">
                <IonLabel className="name">{user?.fullName}</IonLabel>

                <IonLabel className="date">{formatDistanceToNow(date) + ' ago'}</IonLabel>
              </div>
              <IonLabel className="postText">{post.text}</IonLabel>
              <IonImg src={photo} />
              <Action post={post} />
            </div>
          </div>
        </IonCardContent>
      </IonCard>
    </StyledPost>
  );
}

Post.propTypes = {
  post: PropTypes.any
};
