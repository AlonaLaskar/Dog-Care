import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import { trash } from 'ionicons/icons';
import {
  IonCardTitle,
  IonButton,
  IonIcon,
  IonTextarea,
  IonText,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardContent
} from '@ionic/react';

import AuthContext from 'providers/AuthContext';
import { useUser } from 'hook/users';
import { useDeleteComment } from 'hook/comments';

import Avatar from '../../Profile/Avatar';

import StyledSingleComments from './StyledSingleComments';

function SingleComment({ comment }) {
  const { text, uid, date, id } = comment;

  const { user, isLoading: userLoading } = useUser(uid);
  const { userId, loading } = useContext(AuthContext) || {};
  const { deleteComment, isLoading: deleteLoading } = useDeleteComment(id);

  if (userLoading) {
    return 'Loading...';
  }

  const isCurrentUser = !loading && userId === uid;

  return (
    <StyledSingleComments>
      <IonCard>
        <IonCardHeader>
          <Avatar user={user} />
          <IonCardTitle>{user.displayName}</IonCardTitle>
          <IonText>{formatDistanceToNow(date)} ago </IonText>
        </IonCardHeader>
        <IonCardContent>
          <IonLabel>
            <IonTextarea value={text} readonly />
          </IonLabel>

          {isCurrentUser && (
            <IonButton onClick={deleteComment} disabled={deleteLoading} variant="ghost" color="danger">
              <IonIcon slot="start" icon={trash} />
              delete
            </IonButton>
          )}
        </IonCardContent>
      </IonCard>
    </StyledSingleComments>
  );
}

SingleComment.propTypes = {
  comment: PropTypes.object.isRequired
};

export default SingleComment;
