//! Custom Hooks
import { usePosts } from 'hook/posts';

//! Components
import PostsLists from 'components/Feed/PostsList';
import StyledFeed from './StyledFeed';
import NewPost from 'components/Feed/NewPost';

const postIndex = () => {
  // Fetch posts using the usePosts hook
  const { posts, isLoading } = usePosts();

  // If data is still loading, render "Loading..."
  if (isLoading) return 'Loading...';

  // Render the feed component
  return (
    <StyledFeed>
      {/* Render the NewPost component */}
      <NewPost />

      {/* Render the PostsList component and pass the posts data as a prop */}
      <PostsLists posts={posts} />
    </StyledFeed>
  );
};

export default postIndex;
