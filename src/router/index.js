import Home from 'pages/Home';
import AboutUs from 'pages/AboutUs';
import Login from 'pages/Login';
import NavigetorBar from 'components/layout/NavigetorBar';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about-us',
    component: AboutUs
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: 'navegatorbar',
    component: NavigetorBar
  }
];

export default routes;
