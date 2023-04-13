import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import { trash } from 'ionicons/icons';
import { IonGrid, IonRow, IonCol, IonCardTitle, IonButton, IonIcon, IonTextarea, IonText, IonLabel } from '@ionic/react';

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
      <IonGrid>
        <IonRow>
          <IonCol size="auto">
            <Avatar user={user} />
          </IonCol>
          <IonCol>
            <IonCardTitle>{user.displayName}</IonCardTitle>
            <IonText>{formatDistanceToNow(date)} ago </IonText>
            <IonLabel>
              <IonTextarea value={text} readonly />
            </IonLabel>
            {isCurrentUser && (
              <IonButton onClick={deleteComment} disabled={deleteLoading} variant="ghost" color="danger">
                <IonIcon slot="start" icon={trash} />
                delete
              </IonButton>
              
            )}
          </IonCol>
        </IonRow>
      </IonGrid>
    </StyledSingleComments>
  );
}

SingleComment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default SingleComment;
