import StyledProfile from './StyledProfile';
import { AuthContext } from 'pages/auth/authContext';
import { useContext } from 'react';

import SocialNetworkProfile from './ProfileCard';

const Profile = () => {
  const { auth, loading } = useContext(AuthContext) || {};

  return <StyledProfile>{loading ? <div>loading...</div> : <h2> {auth?.userId}</h2>}</StyledProfile>;
};

export default Profile;
