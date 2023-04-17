//! Custom Hooks
import { usePosts } from 'hook/posts';

//! Components
import PostsLists from 'components/Feed/PostsList';
import StyledFeed from './StyledFeed';
import NewPost from 'components/Feed/NewPost';

const postIndex = () => {
  const { posts, isLoading } = usePosts();
  if (isLoading) return 'Loading...';

  return (
    <StyledFeed>
       <NewPost />
      <PostsLists posts={posts} />
  </StyledFeed>
  );
};
export default postIndex;
