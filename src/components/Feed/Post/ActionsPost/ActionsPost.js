import React from 'react';
import { IonIcon, IonButton, IonButtons } from '@ionic/react';
import PropTypes from 'prop-types';
import { useAuth } from 'hook/authUser';
import { useToggleLike, useDeletePost } from 'hook/posts';
import { useComments } from 'hook/comments';
import { trash, heart, chatbubble, heartDislike } from 'ionicons/icons';
import { useState } from 'react';
import CommentList from 'components/Comments/CommentsList/CommentList';
import AuthContext from 'providers/AuthContext';
import { useContext } from 'react';

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
    <>
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

        {comments?.length}

        <IonButton color="secondary" onClick={toggleLike} isLoading={likeLoading || loading} isRound>
          <IonIcon slot="start" icon={isLiked ? heartDislike : heart} />
          Like
        </IonButton>
        {likes?.length}

        {!loading && userId === uid && (
          <IonButton color="danger" onClick={deletePost} isLoading={deleteLoading} isRound>
            <IonIcon slot="start" icon={trash} />
            Delete
          </IonButton>
        )}
        {}
      </IonButtons>
      {showComments && <CommentList post={post} />}
    </>
  );
}

Actions.propTypes = {
  post: PropTypes.any
};
