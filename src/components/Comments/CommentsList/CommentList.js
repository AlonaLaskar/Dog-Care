//!Ionic components

import { IonItem, IonList } from '@ionic/react';
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
    <StylesCommentsList>
      {/* !if there are no comments, show this */}
      {comments.map((comment) => (
        <IonItem key={comment.id}>
          <SingleComments comment={comment} />
        </IonItem>
      ))}
      <NewComment post={post} />
    </StylesCommentsList>
  );
}

CommentList.propTypes = {
  post: PropTypes.object.isRequired
};
