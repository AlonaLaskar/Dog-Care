//!React package
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
//!Ionic package
import { IonAvatar, IonButton, IonTextarea, IonIcon } from '@ionic/react';
import { newspaperOutline,cameraOutline,videocam } from 'ionicons/icons';
//!hook package
import { useAddPost } from 'hook/posts';
import { useUser } from 'hook/users';
//!style package
import StyledNewPost from './StyledNewPost';
//!context package
import AuthContext from 'providers/AuthContext';

const NewPost = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: addingPost } = useAddPost() || {};
  const { userId, loading } = useContext(AuthContext) || {};
  const { user } = useUser(userId) || {};

  function handleAddPost(data) {
    addPost({
      uid: userId,
      text: data.text
    });
    reset();
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
        />

        <IonButton type="submit" textLoading="Creating Post" isLoading={loading || addingPost}>
          <IonIcon icon={newspaperOutline} slot="end" />
          Post
        </IonButton>
        <IonButton type="submit">
          <IonIcon icon={cameraOutline} slot="end" />
          Photo
        </IonButton>
       
       <IonButton type="submit" >
          <IonIcon icon={videocam} slot="end" />
          Video
        </IonButton>
      </form>
        
    </StyledNewPost>
  );
};

export default NewPost;
