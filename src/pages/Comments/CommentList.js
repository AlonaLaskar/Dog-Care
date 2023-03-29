import { IonLabel, IonItem, IonList, IonListHeader, IonAvatar, IonIcon } from '@ionic/react';
import { useComments } from 'hook/comments';
import SingleComments from './SingleComments';
import Avatar from 'pages/Profile/Avatar';
import PropTypes from 'prop-types';
import { chatbubble } from 'ionicons/icons';
import './CommentList.css';

export default function CommentList({post}) {
  const { id } = post;
  const { comments, isLoading } = useComments(id);

  if (isLoading) return 'Loading...';
  return (
    <IonList>
      <IonListHeader>
        <IonLabel className="comment-list-header">Comments</IonLabel>
      </IonListHeader>
      {comments.map((comment) => (
        <IonItem key={comment.id} className="comment-list-item">
          <SingleComments comment={comment} />
          <IonIcon slot="end" icon={chatbubble} />
        </IonItem>
      ))}
    </IonList>
  );
}

CommentList.propTypes = {
  post: PropTypes.object.isRequired,
};
