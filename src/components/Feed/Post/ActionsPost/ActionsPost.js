//!React-pacakges
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
//!Ionic-pacakges
import { IonIcon, IonButton, IonButtons } from '@ionic/react';
import { trashOutline, heartOutline, chatboxOutline, heartDislike } from 'ionicons/icons';
//!Hooks
import { useToggleLike, useDeletePost } from 'hook/posts';
import { useComments } from 'hook/comments';
//!Components
import CommentList from 'components/Comments/CommentsList/CommentList';
import AuthContext from 'providers/AuthContext';

import StyledActionPost from './StyledActionPost';

export default function Actions({ post }) {
  if (!post) return null;
  const { id, likes, uid } = post;
  const { userId, loading } = useContext(AuthContext) || {};

  const isLiked = likes.includes(userId);
  const config = {
    id,
    isLiked,
    uid: userId
  };

  const { toggleLike, isLoading: likeLoading } = useToggleLike(config);
  const { deletePost, isLoading: deleteLoading } = useDeletePost(id);
  const { comments, isLoading: commentsLoading } = useComments(id);
  const [showComments, setShowComments] = useState(false);
  const handleCommentClick = () => {
    setShowComments(!showComments);
  };
  return (
    <StyledActionPost>
        <IonButton color="primary" fill="clear" onClick={handleCommentClick} isLoading={commentsLoading} isRound  >
          <IonIcon slot="end" icon={ chatboxOutline }  />
           Replay {comments?.length}
        </IonButton>

      
        <IonButton color="secondary"   fill="clear" onClick={toggleLike} isLoading={likeLoading || loading} isRound >
          <IonIcon  slot="end" icon={isLiked ? heartDislike : heartOutline}  />
          Like {likes?.length}
        </IonButton>

        {!loading && userId === uid && (
          <IonButton color="danger"  fill="clear" onClick={deletePost} isLoading={deleteLoading}  isRound>
            <IonIcon slot="end" icon={ trashOutline }    />
             Delete
          </IonButton>
        )}
   

      {showComments && <CommentList post={post} />}
    </StyledActionPost>
  );
}

Actions.propTypes = {
  post: PropTypes.any
};