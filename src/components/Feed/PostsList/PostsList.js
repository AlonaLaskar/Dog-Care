import { IonText } from '@ionic/react';
import PropTypes from 'prop-types';
import Post from 'components/Feed/Post';
import StyledPostList from './StyledPostList';
import { Virtuoso } from 'react-virtuoso';

export default function PostsList({ posts }) {
  const hasPosts = posts && posts.length > 0;

  return (
    <StyledPostList>
      {hasPosts ? (
        <Virtuoso
          style={{ height: "calc(100vh - 295px)" }}
          totalCount={posts.length}
          itemContent={(index) => (
            <Post key={posts[index].id} post={posts[index]} />
          )}
        />
      ) : (
        <IonText className="no-posts">Boring here! Write a post...</IonText>
      )}
    </StyledPostList>
  );
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};
