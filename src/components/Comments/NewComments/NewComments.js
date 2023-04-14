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
import { useUser } from '../../../hook/users';

import Avatar from '../../Profile/Avatar';
//! Styles
import StyledNewcomments from './StyledNewcomments';

export default function NewComments({ post }) {

  const { id: postID } = post;
  const { userId, loading } = useContext(AuthContext) || {};
  const { register, handleSubmit, reset } = useForm();
  const {user}=useUser(userId)||{};

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
    <StyledNewcomments>
      <Avatar user={user} />
      <form onSubmit={handleSubmit(handleAddComment)}>
        <IonTextarea
          placeholder="Add a comment..."
          autoComplete="off"
          {...register('text', { require: true })}
        />

        <IonButton isLoading={commentLoading || loading}type="submit">
          Add Comment
        </IonButton>
      </form>
    </StyledNewcomments>
  );
}

NewComments.propTypes = {
  post: PropTypes.object.isRequired
};
