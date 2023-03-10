import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Profile from 'pages/Profile';
import CreatPost from 'pages/CreatPost';

const routes = [
  {
    path: '/tabs/tab1',
    Component: Home
  },
  {
    path: '/tabs/tab2',
    Component: Login
  },
  {
    path: '/tabs/tab3',
    Component: Register
  },
  {
    path: '/tabs/tab4',
    Component: Profile
  }
  ,
  {
    path: '/tabs/tab5',
    Component: CreatPost
  }

];

export default routes;
