import React from 'react';
import { IonIcon, IonButton, IonButtons } from '@ionic/react';
import PropTypes from 'prop-types';
import { useAuth } from 'hook/authUser';
import { useToggleLike, useDeletePost } from 'hook/posts';
import { useComments } from 'hook/comments';
import { trash, heart, chatbubble, heartDislike } from 'ionicons/icons';
import { useState } from 'react';
import CommentList from 'pages/Comments/CommentList';

export default function Actions({ post }) {
  const { id, likes, uid } = post;
  const { user, isLoading: userLoading } = useAuth();

  const isLiked = likes.includes(user?.id);
  const config = {
    id,
    isLiked,
    uid: user?.id
  };

  const { toggleLike, isLoading: likeLoading } = useToggleLike(config);
  const { deletePost, isLoading: deleteLoading } = useDeletePost(id);
  const { comments, isLoading: commentsLoading } = useComments(id);
  const [showComments, setShowComments] = useState(false);
  const handleCommentClick = () => {
    setShowComments(!showComments);
  };

  return (
    <IonButtons
      slot="start"
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        border: '1px solid rgb(227, 213, 202)',
        borderRadius: '10px'
      }}
    >
      <IonButton color="primary" onClick={handleCommentClick} isLoading={commentsLoading} isRound>
        <IonIcon slot="start" icon={chatbubble} /> Comment
      </IonButton>
      {showComments && <CommentList post={post} />}

      {comments?.length}

      <IonButton color="secondary" onClick={toggleLike} isLoading={likeLoading || userLoading} isRound>
        <IonIcon slot="start" icon={isLiked ? heartDislike : heart} />
        Like
      </IonButton>
      {likes?.length}

      {!userLoading && user.id === uid && (
        <IonButton color="danger" onClick={deletePost} isLoading={deleteLoading} isRound>
          <IonIcon slot="start" icon={trash} />
          Delete
        </IonButton>
      )}
      {}
    </IonButtons>
  );
}

Actions.propTypes = {
  post: PropTypes.any
};
