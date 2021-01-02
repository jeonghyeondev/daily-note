import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderContainer from './containers/common/HeaderContainer';
import { Toolbar } from '@material-ui/core';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>DAILY NOTE</title>
      </Helmet>
      <HeaderContainer />
      <Toolbar />
      <Switch>
        <Route component={PostListPage} path={['/', '/@:username']} exact />
        <Route component={LoginPage} path="/login" />
        <Route component={RegisterPage} path="/register" />
        <Route component={WritePage} path="/write" />
        <Route component={PostPage} path="/@:username/:postId" />
      </Switch>
    </React.Fragment>
  );
};

export default App;
