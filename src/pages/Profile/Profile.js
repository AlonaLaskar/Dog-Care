import StyledProfile from './StyledProfile';
import AuthContext from 'providers/AuthContext';
import { useContext } from 'react';

const Profile = () => {
  const { userId, loading } = useContext(AuthContext) || {};

  return <StyledProfile>{loading ? <div>loading...</div> : <h2> {userId}</h2>}</StyledProfile>;
};

export default Profile;
