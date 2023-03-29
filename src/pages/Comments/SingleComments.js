import React from 'react';
import { useAuth } from 'hook/authUser';
import { useUser } from 'hook/users';
import { useDeleteComment } from 'hook/comments';
import { IonGrid, IonRow, IonCol, IonCardTitle, IonCardContent, IonButton, IonIcon, IonTextarea, IonText, IonLabel } from '@ionic/react';
import Avatar from 'pages/Profile/Avatar';
import { formatDistanceToNow } from 'date-fns';
import { trash } from 'ionicons/icons';
import PropTypes from 'prop-types';

export default function SingleComment({ comment }) {
  const { text, uid, date, id } = comment;
  const { user, isLoading: userLoading } = useUser(uid);
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { deleteComment, isLoading: deleteLoading } = useDeleteComment(id);

  if (userLoading) return 'Loading...';

  return (
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
          {!authLoading && authUser.id === uid && (
            <IonButton onClick={deleteComment} disabled={deleteLoading} variant="ghost" color="danger">
              <IonIcon slot="start" icon={trash} />
              delete
            </IonButton>
          )}
        </IonCol>
      </IonRow>
    </IonGrid>
  );
}

SingleComment.propTypes = {
  comment: PropTypes.object.isRequired,
};
