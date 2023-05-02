//!React package
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { useState } from 'react';
//!Ionic package
import { IonAvatar, IonButton, IonTextarea, IonIcon } from '@ionic/react';
import { newspaperOutline, cameraOutline, videocamOutline } from 'ionicons/icons';
//!hook package
import { useAddPost } from 'hook/posts';
import { useUser } from 'hook/users';
//!style package
import StyledNewPost from './StyledNewPost';
//!context package
import AuthContext from 'providers/AuthContext';

import { usePhotoGallery } from 'hook/usePhotoGallery';
const NewPost = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: addingPost } = useAddPost() || {};
  const { userId, loading } = useContext(AuthContext) || {};
  const { user } = useUser(userId) || {};
  const [textValue, setTextValue] = useState('');


  function handleAddPost(data) {
    addPost({
      uid: userId,
      text: data.text
    });
    reset();
    setTextValue(''); // clear the text area value
  }

  function handleTextareaChange(event) {
    setTextValue(event.target.value);
  }

  return (
    <StyledNewPost>
      <form onSubmit={handleSubmit(handleAddPost)}>
        <IonAvatar>
          <img src={user?.avatar} />
        </IonAvatar>
        <IonTextarea
          placeholder="...Say something"
          rows={5}
          cols={20}
          autoGrow={true}
          {...register('text', { required: true })}
          value={textValue} // bind the textarea value to the state variable
          onIonChange={handleTextareaChange} // handle changes to the textarea value
        />

        <IonButton
          type="button"
          color="dark"
          fill="clear"
          textLoading="Creating Post"
          isLoading={loading || addingPost}
        >
          <IonIcon icon={videocamOutline} slot="end" color="dark" />
          <span>VIDEO</span>
        </IonButton>

        <IonButton type="submit" fill="clear" color="dark">
          <IonIcon icon={newspaperOutline} slot="end" color="dark" />
          <span>Post</span>
        </IonButton>
        <IonButton type="button" fill="clear" color="dark">
          <IonIcon icon={cameraOutline} slot="end" color="dark" />
          <span> Photo</span>
        </IonButton>
      </form>
    </StyledNewPost>
  );
};

export default NewPost;
