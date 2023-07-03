//!React package
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { useState } from 'react';
//!Ionic package
import { IonAvatar, IonButton, IonTextarea, IonIcon, IonGrid, IonCol, IonRow } from '@ionic/react';
import { newspaperOutline, cameraOutline, videocamOutline } from 'ionicons/icons';
//!hook package
import { useAddPost } from 'hook/posts';
import { useUser } from 'hook/users';
//!style package
import StyledNewPost from './StyledNewPost';
//!context package
import AuthContext from 'providers/AuthContext';

import usePhotoGallery from 'hook/usePhotoGallery';

const NewPost = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addPost: originalAddPost, isLoading: addingPost } = useAddPost() || {};
  const { userId, loading } = useContext(AuthContext) || {};
  const { user } = useUser(userId) || {};
  const [textValue, setTextValue] = useState(''); // add this state

  const [postId, setPostId] = useState(null); // add this state

  const { takePhoto, chooseFromGallery, uploadPhoto } = usePhotoGallery();


  async function handleAddPost(data) {
    const id = await originalAddPost({
      uid: userId,
      text: data.text
    });
    setPostId(id);
    await uploadPhoto(id, 'posts', ['posts', id], 'photo');  // Pass the arguments here
    reset();
    setTextValue('');
  }

  function handleTextareaChange(event) {
    setTextValue(event.target.value);
  }

  return (
    <StyledNewPost>
      <form onSubmit={handleSubmit(handleAddPost)}>
        <IonGrid>
          <IonRow>
            <IonCol size="12" className="write-post-col">
              <IonAvatar>
                <img src={user?.avatar} />
              </IonAvatar>
              <IonTextarea
                placeholder="Say something..."
                rows={1}
                cols={20}
                mode="ios"
                autoGrow={true}
                {...register('text', { required: true })}
                value={textValue} // bind the textarea value to the state variable
                onIonChange={handleTextareaChange} // handle changes to the textarea value
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="4">
            <IonButton
                type="button"
                color="dark"
                fill="clear"
                textLoading="Creating Post"
                isLoading={loading || addingPost}
                onClick={takePhoto} // Added onClick event handler here
              >
                <IonIcon icon={videocamOutline} slot="start" color="dark" />
                <span>VIDEO</span>
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton type="submit" fill="clear" color="dark">
                <IonIcon icon={newspaperOutline} slot="start" color="dark" />
                <span>Post</span>
              </IonButton>
            </IonCol>
            <IonCol size="4">
          <IonButton type="button" fill="clear" color="dark" onClick={chooseFromGallery}> 
          <IonIcon icon={cameraOutline} slot="start" color="dark" />
          <span> Photo</span>
        </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </form>
    </StyledNewPost>
  );
};

export default NewPost;
