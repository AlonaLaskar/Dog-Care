//!React
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//! Ionic components
import {
  IonCard,
  IonCardContent,
  IonAvatar,
  IonButton,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { trashOutline } from 'ionicons/icons';
//!hooks
import { useDeleteComment } from 'hook/comments';
//! Components
import AuthContext from 'providers/AuthContext';
import HeaderPost from '../../Feed/Post/HeaderPost';
//! Styled Components
import StyledSingleComments from './StyledSingleComments';
import { useUser } from 'hook/users';
import { formatDistanceToNow } from 'date-fns';

function SingleComment({ comment }) {
  const { text, uid, id, date } = comment;
  const { user } = useUser(uid);

  const { userId, loading } = useContext(AuthContext) || {};
  const { deleteComment, isLoading: deleteLoading } = useDeleteComment(id);

  if (loading) {
    return 'Loading...';
  }

  const isCurrentUser = !loading && userId === uid;

  return (
    <StyledSingleComments>
      <IonCard>

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
              <IonLabel className="postText">{text}</IonLabel>

              {isCurrentUser && (
                <IonButton
                  className="trash"
                  onClick={deleteComment}
                  disabled={deleteLoading}
                  variant="ghost"
                  color="danger"
                  fill="clear"
                >
                  <IonIcon slot="start" icon={trashOutline} disabled={deleteLoading} onClick={deleteComment} />
                </IonButton>
              )}
            </div>
          </div>
        </IonCardContent>
      </IonCard>
    </StyledSingleComments>
  );
}

SingleComment.propTypes = {
  comment: PropTypes.object.isRequired
};

export default SingleComment;
