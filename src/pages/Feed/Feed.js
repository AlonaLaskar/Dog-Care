//! Custom Hooks
import { usePosts } from 'hook/posts';

//! Components
import PostsLists from 'components/Feed/PostsList';
import StyledFeed from './StyledFeed';
import NewPost from 'components/Feed/NewPost';
import { IonContent } from '@ionic/react';

const postIndex = () => {
  // Fetch posts using the usePosts hook
  const { posts, isLoading } = usePosts();

  if(!posts) return null;

  // If data is still loading, render "Loading..."
  if (isLoading) return 'Loading...';

  // Render the feed component
  return (
    <StyledFeed>
      {/* Render the NewPost component */}
      <IonContent className="content-pt-60">
        <NewPost />

        {/* Render the PostsList component and pass the posts data as a prop */}
        <PostsLists posts={posts} />
      </IonContent>
    </StyledFeed>
  );
};

export default postIndex;
