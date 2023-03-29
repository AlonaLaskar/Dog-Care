import Action from './ActionsPost';
import Header from './HeaderPost';
import { IonCard, IonCardContent, IonText } from '@ionic/react';

import StyledPost from './StyledPost';
import PropTypes from 'prop-types';

export default function Post({ post }) {
  return (
    <StyledPost>
      <IonCard
        style={{
          maxWidth: '800px',
          margin: '2%',
          padding: '10px',
          backgroundColor: 'gray.50',
          border: '1px solid rgb(227, 213, 202)',
          borderRadius: '10px'
        }}
      >
        <Header post={post} />
        <IonCardContent
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            padding: '10px',
            backgroundColor: 'white',
            border: '1px solid rgb(227, 213, 202)',
            borderRadius: '10px'
          }}
        >
          <IonText
            style={{
              fontSize: '14px',
              color: 'gray.500',
              fontWeight: 'bold'
            }}
          >
            {post.text}
          </IonText>
          <Action post={post} />
        </IonCardContent>
      </IonCard>
    </StyledPost>
  );
}

Post.propTypes = {
  post: PropTypes.any
};
