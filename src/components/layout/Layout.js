import StyledLayout from './StyledLayout';

import { Route } from 'react-router-dom';
import routes from 'router';

import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyle from 'styles/globalStyle';

import Header from './Header';
import Footer from './Footer';

import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledLayout>
        <IonApp>
          <Header />
          <IonReactRouter>
            <IonRouterOutlet>
              {routes.map((route, index) => (
                <Route path={route.path} component={route.component} key={index} />
              ))}
            </IonRouterOutlet>
          </IonReactRouter>
          <Footer />
        </IonApp>
      </StyledLayout>
    </ThemeProvider>
  );
};

export default Layout;
