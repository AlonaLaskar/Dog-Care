import StyledHome from './StyledHome';
import NavigationBar from '../../components/layout/NavigetorBar';
import SearchBar from '../../components/layout/SearchBar';
import { IonPage } from '@ionic/react';

const Home = () => {
  return (
    <IonPage>
      <StyledHome>
        <SearchBar />
        <NavigationBar />
      </StyledHome>
    </IonPage>
  );
};

export default Home;
