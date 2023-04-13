
//!Ionic components

import { IonItem, IonList, IonIcon } from '@ionic/react';
import { chatbubble } from 'ionicons/icons';
//! React-Packages
import PropTypes from 'prop-types';

//!components
import NewComment from '../NewComments';
import SingleComments from '../SingleComments';
import { useComments } from 'hook/comments';

//!style
import StylesCommentsList from './StylesCommentsList';

export default function CommentList({ post }) {
  const { id } = post;
  const { comments, isLoading } = useComments(id);
//!check if comments are loading
  if (isLoading) return 'Loading...';

  return (
    <IonList>
      {/* !if there are no comments, show this */}
      {comments.map((comment) => (
        <IonItem key={comment.id} className="comment-list-item">
          <SingleComments comment={comment} />
          <IonIcon slot="end" icon={chatbubble} />
        </IonItem>
      ))}
      <NewComment post={post} />
    </IonList>
  );
}

CommentList.propTypes = {
  post: PropTypes.object.isRequired
};
