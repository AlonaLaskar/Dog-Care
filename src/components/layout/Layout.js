
import Footer from './Footer';
import StyledLayout from './StyledLayout';
import routes from 'router';
import { IonLoading, IonPage, IonRouterOutlet } from '@ionic/react';

import { Route, Redirect } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyle from 'styles/globalStyle';
import { AuthContext,useAuthInit } from 'pages/auth/authContext';
import { IonReactRouter } from '@ionic/react-router';
import { AppTabs } from '../layout/AppTabs';
import { useEffect, useState } from 'react';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { Switch } from 'react-router-dom';
import NotFoundPage from './NavigetorBar/NotFoundPage';
import { bool } from 'prop-types';

const Layout = () => {
  const {loading,auth} = useAuthInit();

  if(loading){
    return <IonLoading isOpen />;
  }
  console.log('loggedIn layout:', auth);
  return (
    <AuthContext.Provider value={auth}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <IonReactRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
  
            <Route exact path="/register" component={Register} />

            <Route path="/my">
              <AppTabs />
            </Route>
            <Redirect exact path="/my" to="/my/home" />
            <Route>
              <NotFoundPage />
            </Route>
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

// const Layout = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <GlobalStyle />
//       <IonReactRouter>
//         <IonRouterOutlet>

//           <Redirect exact path='/tabs' to='/tabs/tab1' />
//           {routes.map((route) => (
//             <Route key={route.path} path={route.path} exact>
//               <IonPage>
//                 <Header />
//                 <route.Component />
//                 <Footer />
//               </IonPage>
//             </Route>
//           ))}
//           <Route exact path='/tabs'>
//             <Redirect to='/tabs/tab1' />
//           </Route>
//           <Route exact path='/'>
//             <Redirect to='/tabs/tab1' />
//           </Route>
//         </IonRouterOutlet>
//       </IonReactRouter>
//     </ThemeProvider>
//   );
// };
