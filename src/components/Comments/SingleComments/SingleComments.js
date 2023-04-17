//!React
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//! Ionic components
import {IonButton,IonIcon,IonText} from '@ionic/react';
import { trashOutline } from 'ionicons/icons';
//!hooks
import { useDeleteComment } from 'hook/comments';
//! Components
import AuthContext from 'providers/AuthContext';
import HeaderPost from '../../Feed/Post/HeaderPost';
//! Styled Components
import StyledSingleComments from './StyledSingleComments';


function SingleComment({ comment }) {
  const { text, uid, id } = comment;

  const { userId, loading } = useContext(AuthContext) || {};
  const { deleteComment, isLoading: deleteLoading } = useDeleteComment(id);

  if (loading) {
    return 'Loading...';
  }

  const isCurrentUser = !loading && userId === uid;

  return (
    <StyledSingleComments>
      <div className="header">
        <HeaderPost post={comment} />
      </div>
      <div className="text">
        <IonText>{text}</IonText>
      </div>
      <div className="delete">
        {isCurrentUser && (
          <IonButton onClick={deleteComment} disabled={deleteLoading} variant="ghost" color="danger" fill="clear">
            <IonIcon slot="start" icon={trashOutline} />
          </IonButton>
        )}
      </div>
    </StyledSingleComments>
  );
}

SingleComment.propTypes = {
  comment: PropTypes.object.isRequired
};

export default SingleComment;
