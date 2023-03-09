import StyledLayout from './StyledLayout';

import { Route, Redirect } from 'react-router-dom';
import routes from 'router';

import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyle from 'styles/globalStyle';

import Header from './Header';
import Footer from './Footer';

import { IonPage, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <IonReactRouter>
        <IonRouterOutlet>
          <Redirect exact path="/tabs" to="/tabs/tab1" />
          {routes.map((route) => (
            <Route key={route.path} path={route.path} exact>
              <IonPage>
                <Header />
                <route.Component />
                <Footer />
              </IonPage>
            </Route>
          ))}
          <Route exact path="/tabs">
            <Redirect to="/tabs/tab1" />
          </Route>
          <Route exact path="/">
            <Redirect to="/tabs/tab1" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </ThemeProvider>
  );
};

export default Layout;
