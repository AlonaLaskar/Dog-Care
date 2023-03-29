
import PostsLists from '../../pages/post/PostsLists';

import React from 'react';
import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonTextarea } from '@ionic/react';
import './dash.css';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hook/authUser';
import { useAddPost, usePosts } from '../../hook/posts';
import { PropTypes } from 'prop-types';

export function NewPost(){

    const { register, handleSubmit, reset } = useForm();
    const { addPost, isLoading: addingPost } = useAddPost();
    const { user, isLoading: authLoading } = useAuth();
    
    function handleAddPost(data) {
        addPost({
          uid:user.id,
          text: data.text,
        });
        reset();
      }
    return(
            <IonCard style={
              {
                flexDirection: 'column',
                maxWidth: '600px',
                margin: '2%',
                padding: '10px',
                backgroundColor: 'gray.50',
                border: '1px solid rgb(227, 213, 202)',
                borderRadius: '10px',
              


              }
            }>
            <form onSubmit={handleSubmit(handleAddPost)}>
            <IonCardHeader>
            <IonTextarea 
            placeholder='צור פוסט חדש...'
             rows={5} cols={20}
             {...register('text', { required: true })}/>
           <IonButton
            className='buttom'
             type='submit'
             textLoading='פוסט נוצר'
             isLoading={authLoading || addingPost}
             >
              פרסם
            </IonButton>
            </IonCardHeader>
            </form>
            </IonCard>


    );
}

export default function Dashboard() {
  const { posts, isLoading } = usePosts();
  if (isLoading) return 'Loading...';

  return (
    <>
      <NewPost />
      <PostsLists posts={posts} />
    </>
  );
}
NewPost.propTypes = {
  posts: PropTypes.array,
  isLoading: PropTypes.bool,
  user: PropTypes.string,
};

