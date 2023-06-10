import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonImg, IonLabel, IonText } from '@ionic/react';
import Action from './ActionsPost';
import HeaderPost from './HeaderPost';
import StyledPost from './StyledPost';
import PropTypes from 'prop-types';
import { useUser } from 'hook/users';
import { formatDistanceToNow } from 'date-fns';


export default function Post({ post }) {

  const { uid, date } = post;

  const { user, isLoading } = useUser(uid) || {};

  return (
    <StyledPost>
      <IonCard className='postcard'>
         <IonCardHeader>
  
  <IonAvatar>
      <img src={user?.avatar} alt={user?.fullName}/>
    </IonAvatar>
    <IonLabel className='name'>
      {user?.fullName}
    </IonLabel>
    <IonLabel className='date'>
      <h2>{formatDistanceToNow(date) + ' ago'}</h2>
    </IonLabel>
  </IonCardHeader>
       
        <IonCardContent>
          <IonLabel className='postText'>{post.text}</IonLabel>
          <Action post={post} />
        </IonCardContent>
      </IonCard>
    </StyledPost>
  );
}

Post.propTypes = {
  post: PropTypes.any,
};
