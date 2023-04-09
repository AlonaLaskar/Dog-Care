import { IonButton, IonCard, IonCardHeader, IonTextarea } from '@ionic/react';
import { useForm } from 'react-hook-form';
import AuthContext from 'providers/AuthContext';
import { useContext } from 'react';
import { useAddPost } from 'hook/posts';
import './NewPost.css'

const NewPost = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: addingPost } = useAddPost() || {};
  const { userId, loading } = useContext(AuthContext) || {};
  
  function handleAddPost(data) {
    addPost({
      uid: userId,
      text: data.text
    });
    reset();
  }

  return (
    <IonCard className="new-post-card">
      <form onSubmit={handleSubmit(handleAddPost)}>
        <IonCardHeader>
          <IonTextarea className="new-post-textarea" placeholder="צור פוסט חדש..." rows={5} cols={20} {...register('text', { required: true })} />
          <IonButton className="new-post-button" type="submit" textLoading="פוסט נוצר" isLoading={loading || addingPost}>
            פרסם
          </IonButton>
        </IonCardHeader>
      </form>
    </IonCard>
  );
};

export default NewPost;
