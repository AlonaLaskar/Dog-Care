//!React
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//! Ionic components
import { IonCard, IonCardContent, IonCardHeader, IonAvatar, IonText, IonButton, IonIcon, IonLabel, IonCardTitle } from '@ionic/react';
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
  const { text, uid, id,date } = comment;
  const {user} = useUser(uid);

  const { userId, loading } = useContext(AuthContext) || {};
  const { deleteComment, isLoading: deleteLoading } = useDeleteComment(id);

  if (loading) {
    return 'Loading...';
  }

  const isCurrentUser = !loading && userId === uid;

  return (
    <StyledSingleComments>
      <IonCard>
      <IonCardHeader>
  
      <IonAvatar>
          <img src={user?.avatar} alt={user?.fullName}/>
        </IonAvatar>
        <IonLabel className='name'>
          {user?.fullName}
        </IonLabel>
        <IonLabel className='date'>
          <h2>{formatDistanceToNow(date) + ' ago'}</h2>
        </IonLabel>
      </IonCardHeader>

      <IonCardContent>
        <IonLabel>
          <span>
            {text}
          </span>
        </IonLabel>
      </IonCardContent>
        {isCurrentUser && (
          <IonButton className='trash' onClick={deleteComment} disabled={deleteLoading} variant='ghost' color='danger' fill='clear'>
            <IonIcon slot='start' icon={trashOutline} disabled={deleteLoading} onClick={deleteComment} />
          </IonButton>
        )}
      </IonCard>
    </StyledSingleComments>
  );
}

SingleComment.propTypes = {
  comment: PropTypes.object.isRequired
};

export default SingleComment;
