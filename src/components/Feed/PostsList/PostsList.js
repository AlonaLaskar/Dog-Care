//! Ionic components
import { IonCard, IonText } from '@ionic/react';
//!prop-types
import PropTypes from 'prop-types';
//! Components
import Post from 'components/Feed/Post';
//! Styled components
import StyledPostList from './StyledPostList';


export default function PostsList({ posts }) {
  const hasPosts = posts && posts.length > 0;

  return (
    <StyledPostList>
      <IonText className="title">What is everyone saying?</IonText>
      {hasPosts ? posts.map((post) => <Post key={post.id} post={post} />) : (
        <IonText className="no-posts">Boring here! Write a post...</IonText>
      )}
    </StyledPostList>
  );
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};