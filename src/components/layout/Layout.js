import Footer from './Footer';
import StyledLayout from './StyledLayout';
import routes from 'router';
import { IonLoading, IonPage, IonRouterOutlet } from '@ionic/react';
import AuthContext from 'providers/AuthContext';

import { Route, Redirect } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyle from 'styles/globalStyle';
import { _useAuthInit } from 'auth';
import { IonReactRouter } from '@ionic/react-router';
import { AppTabs } from '../layout/AppTabs';
import { useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
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
    <IonReactRouter>
      <AuthContext.Provider value={auth}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Switch>
            <AppTabs />
          </Switch>
        </ThemeProvider>
      </AuthContext.Provider>
    </IonReactRouter>
  );
};
export default Layout;

Layout.propTypes = {
  user: bool
};
