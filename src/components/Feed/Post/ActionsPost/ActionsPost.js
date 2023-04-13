//!React-pacakges
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
//!Ionic-pacakges
import { IonIcon, IonButton, IonButtons } from '@ionic/react';
import { trash, heart, chatbubble, heartDislike } from 'ionicons/icons';
//!Hooks
import { useToggleLike, useDeletePost } from 'hook/posts';
import { useAuth } from 'hook/authUser';
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
      <IonButtons slot="start">
        <IonButton color="primary" onClick={handleCommentClick} isLoading={commentsLoading} isRound>
          <IonIcon slot="start" icon={chatbubble} /> Comment {comments?.length}
        </IonButton>

        <IonButton color="secondary" onClick={toggleLike} isLoading={likeLoading || loading} isRound>
          <IonIcon slot="start" icon={isLiked ? heartDislike : heart} />
          Like {likes?.length}
        </IonButton>

        {!loading && userId === uid && (
          <IonButton color="danger" onClick={deletePost} isLoading={deleteLoading} isRound>
            <IonIcon slot="start" icon={trash} />
            Delete
          </IonButton>
        )}
      </IonButtons>

      {showComments && <CommentList post={post} />}
    </StyledActionPost>
  );
}

Actions.propTypes = {
  post: PropTypes.any
};