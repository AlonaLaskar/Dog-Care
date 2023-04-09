//!React-pacakges
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
//! Ionic components
import { IonButton, IonTextarea } from '@ionic/react';
//! Firebase
import { auth } from '../../../firebase';
//! Context
import AuthContext from 'providers/AuthContext';
//! Hooks-components
import { useAddComment } from '../../../hook/comments';

import Avatar from '../../Profile/Avatar';
//! Styles
import './Newcomments.css';

export default function NewComments({ post }) {
  const { id: postID } = post;
  const { userId, loading } = useContext(AuthContext) || {};
  const { register, handleSubmit, reset } = useForm();
  const user = auth.currentUser;

  const { addComment, isLoading: commentLoading } = useAddComment({
    postID,
    uid: userId
  });

  function handleAddComment(data) {
    addComment(data.text);
    reset();
  }

  if (loading) return 'Loading...';

  return (
    <div className="contaner">
      <div className="header-comment">
        <Avatar user={user} />
        <span>
          <h3>{user.displayName}</h3>
        </span>
      </div>
      <div className="text">
        <form onSubmit={handleSubmit(handleAddComment)}>
          <IonTextarea
            className="comment-textarea" // Add class name
            placeholder="Add a comment..."
            autoComplete="off"
            {...register('text', { require: true })}
          />

          <div className="button">
            <IonButton
              className="comment-button" // Add class name
              isLoading={commentLoading || loading}
              type="submit"
            >
              Add Comment
            </IonButton>
          </div>
        </form>
      </div>
    </div>
  );
}

NewComments.propTypes = {
  post: PropTypes.object.isRequired
};
