import StyledHome from './StyledHome';
import SearchBar from '../../components/layout/SearchBar';
import { IonContent } from '@ionic/react';

const Home = () => {
  return (
    <StyledHome>
      <SearchBar />
    </StyledHome>
  );
};

export default Home;
