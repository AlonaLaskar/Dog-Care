import StyledHome from './StyledHome';
import { auth } from '../../firebase';
import { currentUser } from 'firebase/auth';


const Home = () => {
  const user = auth.currentUser;
  if(user){
    console.log('user',user);
  }else{
   window.location.href = '/login';
  }


  return (
    <StyledHome>
    
    <p>home page</p>
    <p>{ `שלום :${user.email}`}</p>


    
      
    </StyledHome>
  );
};

export default Home;
