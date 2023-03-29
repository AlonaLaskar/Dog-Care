//! Packages
import { IonButton, IonCard, IonCardHeader, IonTextarea } from '@ionic/react';
import { useForm } from 'react-hook-form';

//! Custom Hooks
import { useAuth } from 'hook/authUser';
import { useAddPost } from 'hook/posts';

const NewPost = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: addingPost } = useAddPost() || {};
  const { user, isLoading: authLoading } = useAuth();

  function handleAddPost(data) {
    addPost({
      uid: user.id,
      text: data.text
    });
    reset();
  }
  return (
    <IonCard
      style={{
        flexDirection: 'column',
        maxWidth: '600px',
        margin: '2%',
        padding: '10px',
        backgroundColor: 'gray.50',
        border: '1px solid rgb(227, 213, 202)',
        borderRadius: '10px'
      }}
    >
      <form onSubmit={handleSubmit(handleAddPost)}>
        <IonCardHeader>
          <IonTextarea placeholder="צור פוסט חדש..." rows={5} cols={20} {...register('text', { required: true })} />
          <IonButton className="buttom" type="submit" textLoading="פוסט נוצר" isLoading={authLoading || addingPost}>
            פרסם
          </IonButton>
        </IonCardHeader>
      </form>
    </IonCard>
  );
};

export default NewPost;
