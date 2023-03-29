
import { useAuth } from '../../hook/authUser';
import { useAddComment } from '../../hook/comments';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { IonButton,IonTextarea,IonCard,IonCardHeader,IonCardContent } from '@ionic/react';
import Avatar from '../Profile/Avatar';


export default function NewComment({ post }) {
  const { id: postID } = post;
  const { user, isLoading: authLoading } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  
  const { addComment, isLoading: commentLoading } = useAddComment({
    postID,
    uid: user?.id,
  });

  function handleAddComment(data) {
      addComment(data.text);
      reset();
  }

  if (authLoading) return 'Loading...';

  return (


    <IonCard style={{padding:'1rm',margin:'5%'}}>
            <IonCardHeader
                style={{
                    maxWidth: '550px',
                    padding: '10px',
                }}
            >
                <Avatar user={user} />
            </IonCardHeader>

            <IonCardContent>
                <form onSubmit={handleSubmit(handleAddComment)}>
                    <IonTextarea
                        placeholder='Add a comment...'
                        autoComplete='off'
                        {...register('text', {require:true})}
                        style={{
                            width: '100%',
                            maxWidth: '600px',
                            margin: '0 auto',
                            padding: '1rem',
                            marginTop: '1rem',
                            marginBottom: '1rem',
                            borderRadius: '10px',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
                        }}
                    />
                    <IonButton
                        isLoading={commentLoading || authLoading}
                        type='submit'
                        color='primary'
                        style={{
                        display: 'block',
                        margin: '0 auto',     
                        }}
                    >
                        Add Comment
                    </IonButton>
                </form>
            </IonCardContent>
        </IonCard>


  );
}
NewComment.propTypes = {
    post: PropTypes.object.isRequired,
};

