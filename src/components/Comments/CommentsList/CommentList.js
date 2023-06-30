//!Ionic components
import { IonItem } from '@ionic/react';
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

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <>
      <StylesCommentsList>
        {comments.length === 0 ? (
          <IonItem lines="none" className="no-comments">
            <p>No comments yet.</p>
          </IonItem>
        ) : (
          comments.map((comment) => (
            <div key={comment.id}>
              <SingleComments comment={comment} />
            </div>
          ))
        )}
      </StylesCommentsList>
      <NewComment post={post} />
    </>
  );
}

CommentList.propTypes = {
  post: PropTypes.object.isRequired,
};
