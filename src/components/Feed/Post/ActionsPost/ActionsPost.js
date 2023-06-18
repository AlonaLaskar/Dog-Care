//!React-pacakges
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
//!Ionic-pacakges
import { IonIcon, IonButton } from '@ionic/react';
import { trashOutline, heartOutline, chatboxOutline, heartDislike } from 'ionicons/icons';
import LikeIcon from 'assets/like.svg';
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
      <div className="action-post">
        <div>
          {!loading && userId === uid && (
            <IonButton color="danger" fill="clear" onClick={deletePost} isLoading={deleteLoading} isRound>
              <IonIcon slot="start" icon={trashOutline} />
              Delete
            </IonButton>
          )}

          <IonButton
            fill="clear"
            onClick={toggleLike}
            isLoading={likeLoading || loading}
            isRound
            className={isLiked ? 'active' : ''}
          >
            <IonIcon slot="start" icon={isLiked ? LikeIcon : LikeIcon} />
            Like
          </IonButton>

          <IonButton
            fill="clear"
            onClick={handleCommentClick}
            isLoading={commentsLoading}
            isRound
            className={showComments ? 'active' : ''}
          >
            <IonIcon slot="start" icon={chatboxOutline} />
            Reply
          </IonButton>
        </div>
        <div className="action-counter">
          <span>
            <IonIcon slot="start" icon={isLiked ? LikeIcon : LikeIcon} /> {likes?.length}
          </span>
          <span>
            <IonIcon icon={chatboxOutline} /> {comments?.length}
          </span>
        </div>
      </div>

      {showComments && <CommentList post={post} />}
    </StyledActionPost>
  );
}

Actions.propTypes = {
  post: PropTypes.any
};