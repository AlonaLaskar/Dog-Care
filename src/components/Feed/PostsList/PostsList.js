import Post from 'components/Feed/Post';
import { IonCard, IonText } from '@ionic/react';
import PropTypes from 'prop-types';
import NewComment from 'pages/Comments/NewComment';

export default function PostsLists({ posts }) {
  return (
    <IonCard
      className="post"
      style={{
        maxWidth: '600px',
        margin: '2%',
        padding: '10px',
        backgroundColor: 'gray.50',
        border: '1px solid rgb(227, 213, 202)',
        borderRadius: '10px'
      }}
    >
      <IonText
        style={{
          fontSize: '12px',
          color: 'gray.500',
          fontWeight: 'bold',
          margin: '0 5px'
        }}
      >
        כל מה שחם!
      </IonText>

      {posts?.length === 0 ? (
        <IonText
          style={{
            fontSize: '12px',
            color: 'gray.500',
            fontWeight: 'bold'
          }}
        >
          !משעמם פה אין פוסטים!
        </IonText>
      ) : (
        posts?.map((post) => <Post key={post.id} post={post} />)
      )}
    </IonCard>
  );
}
PostsLists.propTypes = {
  posts: PropTypes.any
};
