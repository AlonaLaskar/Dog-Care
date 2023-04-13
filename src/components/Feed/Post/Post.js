import { IonCard, IonCardContent, IonText } from '@ionic/react';
import Action from './ActionsPost';
import Header from './HeaderPost';
import StyledPost from './StyledPost';
import PropTypes from 'prop-types';

export default function Post({ post }) {
  return (
    <StyledPost>
      <IonCard>
        <Header post={post} />
        <IonCardContent>
          <IonText>{post.text}</IonText>
          <Action post={post} />
        </IonCardContent>
      </IonCard>
    </StyledPost>
  );
}

Post.propTypes = {
  post: PropTypes.any
};
