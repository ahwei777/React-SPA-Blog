/* eslint-disable import/no-unresolved */
import './App.css';
import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserData } from './redux/reducers/userReducer';
import styled from 'styled-components';

import Header from './components/Header';
import MainRoutes from './routes/MainRoutes';
import {
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
        <MainRoutes/>
      </Layout>
    </Router>
  );
}

export default BlogAppRedux;
