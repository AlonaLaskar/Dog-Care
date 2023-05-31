//! Ionic components
import { IonCard, IonCardContent, IonLabel, IonText } from '@ionic/react';
//! Components
import Action from './ActionsPost';
import HeaderPost from './HeaderPost';
import StyledPost from './StyledPost';
import { Virtuoso } from 'react-virtuoso';
import PropTypes from 'prop-types';

export default function Post({ post }) {
  return (
    <Virtuoso
      style={{ height: '250px' }} // Adjust the height to fit your requirements
      totalCount={1} // Pass 1 as the total count since there is only one post
      item={() => (
        <StyledPost>
          <IonCard>
            <HeaderPost post={post} />
            <IonCardContent>
              <IonText className='postText'>{post.text}</IonText>
              <Action post={post} />
            </IonCardContent>
          </IonCard>
        </StyledPost>
      )}
    />
  );
}

Post.propTypes = {
  post: PropTypes.any,
};
