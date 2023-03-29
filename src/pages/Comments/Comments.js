
import Styledcomments from './StyledComments';
import NewComment from './NewComment';
import { IonCard } from '@ionic/react';
import { useParams } from 'react-router-dom';
import { usePost } from 'hook/posts';
import CommentList from './CommentList';
import Post from 'pages/post';


 export default function Comments() {
  const { id } = useParams();
  const { post, isLoading } = usePost(id);

  if (isLoading) return 'Loading...';

  return (
      <Styledcomments>
      <Post post={post} />
      <NewComment post={post} />
      <CommentList post={post} />    
      </Styledcomments>
  );
}
