/* eslint-disable import/no-unresolved */
import './App.css';
import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserData } from './redux/reducers/userReducer';
import styled from 'styled-components';

import Header from './components/Header';
import HomePage from './components/Pages/HomePage';
import LoginPage from './components/Pages/LoginPage';
import RegisterPage from './components/Pages/RegisterPage';
import SinglePostPage from './components/Pages/SinglePostPage';
import AddPostPage from './components/Pages/AddPostPage';
import AboutPage from './components/Pages/AboutPage';
import PaginationPage from './components/Pages/PaginationPage';
import UpdatePostPage from './components/Pages/UpdatePostPage';

import {
  MEDIA_QUERY_MOBILE_M,
  MEDIA_QUERY_TABLET,
} from './constants/breakpoint';

const Layout = styled.div`
  ${MEDIA_QUERY_TABLET} {
    display: flex;
    flex-direction: column;
  }
`;

function BlogAppRedux() {
  const dispatch = useDispatch();

  // 只在初次 render App 時確認身分
  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <Router>
      <Layout>
        <Header>header</Header>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/pagination/:page">
            <PaginationPage />
          </Route>
          <Route exact path="/posts/:id">
            <SinglePostPage />
          </Route>
          <Route exact path="/new-post">
            <AddPostPage />
          </Route>
          <Route exact path="/update-post/:id">
            <UpdatePostPage />
          </Route>
          {/* 沒被上面攔截的其他網址都導至首頁 */}
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default BlogAppRedux;
