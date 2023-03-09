import Home from 'pages/Home';
import AboutUs from 'pages/AboutUs';
import Login from 'pages/Login';
import NavigetorBar from 'components/layout/NavigetorBar';
import Register from 'pages/Register';
import Profile from 'pages/Profile';

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
];

export default routes;
