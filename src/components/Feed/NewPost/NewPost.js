import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { useState } from 'react';
import { IonAvatar, IonButton, IonTextarea, IonIcon, IonGrid, IonCol, IonRow } from '@ionic/react';
import { newspaperOutline, cameraOutline, videocamOutline } from 'ionicons/icons';
import { useAddPost } from 'hook/posts';
import { useUser } from 'hook/users';
import StyledNewPost from './StyledNewPost';
import AuthContext from 'providers/AuthContext';
import usePhotos from 'hook/usePhotoGallery';

const NewPost = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addPost: originalAddPost, isLoading: addingPost } = useAddPost() || {};
  const { userId, loading } = useContext(AuthContext) || {};
  const { user } = useUser(userId) || {};
  const [textValue, setTextValue] = useState('');

  const { takePhoto, chooseFromGallery, uploadPhoto } = usePhotos();

  async function handleAddPost(data) {
    const id = await originalAddPost({
      uid: userId,
      text: data.text
    });
    await uploadPhoto(id, 'posts', ['posts', id], 'photo');
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
                value={textValue}
                onIonChange={handleTextareaChange}
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
                onClick={takePhoto}
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
