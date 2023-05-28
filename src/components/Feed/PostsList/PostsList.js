//! Ionic components
import { IonText } from '@ionic/react';
//!prop-types
import PropTypes from 'prop-types';
//! Components
import Post from 'components/Feed/Post';
//! Styled components
import StyledPostList from './StyledPostList';
import { Virtuoso } from 'react-virtuoso';

export default function PostsList({ posts }) {
  const hasPosts = posts && posts.length > 0;

  return (
    <StyledPostList>
      {hasPosts ? (
        <Virtuoso
          style={{ height:"500px"}} // Adjust the height to fit your requirements
          totalCount={posts.length} // Pass the total count of items
          itemContent={index => <Post key={posts[index].id} post={posts[index]} />} // Render each post item
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
