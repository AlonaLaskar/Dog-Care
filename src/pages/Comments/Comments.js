//! React-Packages
import { useParams } from 'react-router-dom';
//! Hooks
import { usePost } from 'hook/posts';
//! Components
import NewComment from '../../components/Comments/NewComments';
import Styledcomments from './StyledComments';
import CommentList from '../../components/Comments/CommentsList/CommentList';
//!Pages
import Post from 'pages/Feed';

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
