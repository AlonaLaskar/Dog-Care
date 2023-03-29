import Footer from './Footer';
import StyledLayout from './StyledLayout';
import routes from 'router';
import { IonLoading, IonPage, IonRouterOutlet } from '@ionic/react';

import { Route, Redirect } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyle from 'styles/globalStyle';
import { AuthContext, _useAuthInit } from 'pages/auth/authContext';
import { IonReactRouter } from '@ionic/react-router';
import { AppTabs } from '../layout/AppTabs';
import { useEffect, useState } from 'react';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { Switch } from 'react-router-dom';
import NotFoundPage from './NavigetorBar/NotFoundPage';
import { bool } from 'prop-types';

const Layout = () => {
  const [auth, setAuth] = useState({ loading: true });

  useEffect(() => {
    _useAuthInit(setAuth);
  }, []);

  if (auth?.loading) {
    return <IonLoading isOpen />;
  }

  return (
    <AuthContext.Provider value={auth}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <IonReactRouter>
          <Switch>
            <AppTabs />
          </Switch>
        </IonReactRouter>
      </ThemeProvider>
    </AuthContext.Provider>
  );
};
export default Layout;

Layout.propTypes = {
  user: bool
};
