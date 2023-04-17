//!iONIC
import { IonCard, IonCardContent, IonText } from '@ionic/react';
//!cOMPONENTS
import Action from './ActionsPost';
import HeaderPost from './HeaderPost';
import StyledPost from './StyledPost';

import PropTypes from 'prop-types';

export default function Post({ post }) {
  return (
    <StyledPost>
      <IonCard>
        <HeaderPost post={post} />
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
