//!React
import { useEffect, useState } from 'react';
import { IonLoading, IonRouterOutlet } from '@ionic/react';
import AuthContext from 'providers/AuthContext';
//!Router
import { Route,Redirect } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { Switch } from 'react-router-dom';
//!Styled-components
import theme from 'styles/theme';
import GlobalStyle from 'styles/globalStyle';
import { ThemeProvider } from 'styled-components';

//!Pages
import Login from 'pages/Login';
import Register from 'pages/Register';
import ForgetPassword from 'pages/ForgetPassword';

import Header from 'components/layout/Header';
import { AppTabs } from '../layout/AppTabs';
import { _useAuthInit } from 'auth';

const Layout = () => {
  const [auth, setAuth] = useState({ loading: true });
  // console.log(auth);

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

       
            <IonRouterOutlet>
              <Switch>
              <Redirect exact path="/" to="/login" />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path='/ForgetPassword' component={ForgetPassword} />
              </Switch>
            </IonRouterOutlet>
       

              <Switch>
              <Route path="/my">
                <AppTabs />
                <Header />
              </Route>
            </Switch>

           
        </ThemeProvider>
      </AuthContext.Provider>
    </IonReactRouter>
  );
};
export default Layout;

