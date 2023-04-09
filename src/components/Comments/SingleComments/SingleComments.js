//!React-pacakges
import React from 'react';
import { useContext } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
//!Context
import AuthContext from 'providers/AuthContext';
//! Ionic components
import { trash } from 'ionicons/icons';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonCardTitle,
  IonButton,
  IonIcon,
  IonTextarea,
  IonText,
  IonLabel
} from '@ionic/react';
//! Hooks-components
import { useUser } from 'hook/users';
import { useDeleteComment } from 'hook/comments';
import Avatar from '../../Profile/Avatar';
export default function SingleComment({ comment }) {
  const { text, uid, date, id } = comment;
  const { user, isLoading: userLoading } = useUser(uid);
  const { userId, loading } = useContext(AuthContext) || {};

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
          {!loading && userId === uid && (
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
  comment: PropTypes.object.isRequired
};
