import React from 'react';

import {
  Route,
  Switch,
  BrowserRouter as Router,
  withRouter,
} from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import SelectClassifications from './components/classification/SelectClassifications';
import BackgroundImage from './imgs/background.jpg';
import Dashboard from './components/Dashboard/Dashboard';
import AppSkin from './components/skin/AppSkin';

const styles = (theme) => ({
  main: {
    backgroundImage: `url(${BackgroundImage})`,
    height: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: 0,
  },
  loggedInPageStyle: {
    position: 'absolute',
    top: 100,
    left: 300,
  },
});

const App = ({ classes }) => {
  const getRoutes = [
    {
      path: '/',
      component: Login,
      isExact: true,
    },
    {
      path: '/signup',
      component: Signup,
    },
    {
      path: '/classification',
      component: SelectClassifications,
    },
    {
      path: '/dashboard',
      component: Dashboard,
      showSideBar: true,
    },
  ];

  return (
    <Router>
      <div className={classes.main}>
        <AppSkin />
        <div>
          <Switch>
            {getRoutes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.isExact}
                render={() => (
                  <div
                    className={
                      route.showSideBar ? classes.loggedInPageStyle : null
                    }>
                    <route.component />
                  </div>
                )}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default withRouter(withStyles(styles)(App));
