import StyledHome from './StyledHome';
import NavigationBar from '../../components/layout/NavigetorBar';
import SearchBar from '../../components/layout/SearchBar';

const Home = () => {
  return (
    <StyledHome>
      <SearchBar />
      <NavigationBar />
    </StyledHome>
  );
};

export default Home;
