//!React-pacakges
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import PropTypes from 'prop-types';
//! Ionic components
import { IonButton, IonIcon, IonTextarea } from '@ionic/react';
import { addOutline } from 'ionicons/icons';
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
  const { user } = useUser(userId) || {};
  const { addComment, isLoading: commentLoading } = useAddComment({
    postID,
    uid: userId
  });

  // add a state variable to keep track of the textarea value
  const [textValue, setTextValue] = useState('');

  function handleAddComment(data) {
    addComment(data.text);
    reset(); // reset the form
    setTextValue(''); // clear the text area value
  }

  function handleTextareaChange(event) {
    setTextValue(event.target.value);
  }

  if (loading) return 'Loading...';

  return (
    <StyledNewcomments>
      <Avatar user={user} />
      <form onSubmit={handleSubmit(handleAddComment)}>
        <IonTextarea
          placeholder="Add a comment..."
          autoComplete="on"
          {...register('text', { require: true })}
          clearOnEdit={false}
          value={textValue} // bind the textarea value to the state variable
          onIonChange={handleTextareaChange} // handle changes to the textarea value
        />

        <IonButton
          className="add"
          isLoading={commentLoading || loading}
          type="submit"
          fill="clear"
        >
          <IonIcon slot="start" icon={addOutline} />
        </IonButton>
      </form>
    </StyledNewcomments>
  );
}

NewComments.propTypes = {
  post: PropTypes.object.isRequired,
};