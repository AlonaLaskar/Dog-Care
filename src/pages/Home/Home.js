import StyledHome from './StyledHome';
import { auth } from '../../firebase';
import { currentUser } from 'firebase/auth';
import { Mapa } from 'components/Maps/Mapa';
import { useJsApiLoader } from '@react-google-maps/api';


const Home = () => {
  
  const user = auth.currentUser;
  if (user) {
    // console.log('user',user);
  } else {
    window.location.href = '/login';
  }

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey:process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })
  if(!isLoaded) return 'Loading...'
  return (
    <StyledHome>
      <p>home page</p>
      <Mapa />
    </StyledHome> 
  );
}


  // return (
  //   <StyledHome>
  //     <p>home page</p>
  //     <Mapa />
  //     {/* <p>{`שלום :${user.email}`}</p> */}
  //   </StyledHome>
  // );
// };

export default Home;
