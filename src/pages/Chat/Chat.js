//! Custom Hooks
import { usePosts } from 'hook/posts';

//! Components
import Post from 'components/Feed/Post';


const Chat = () => {

  const { posts, isLoading } = usePosts();


  if (isLoading) return 'Loading...';

  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default Chat;
