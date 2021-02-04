/* eslint-disable import/no-unresolved */
// 引入 bootstrap 的 CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';

// 引入主題(可設定類似 mixin 的全域變數供使用
//  import { ThemeProvider } from "styled-components";

import { Provider } from 'react-redux';
import store from './redux/store';
import BlogAppRedux from './App';

// <React.StrictMode> 嚴格模式可能會造成偵錯問題，可先取消
ReactDOM.render(
  <Provider store={store}>
    <BlogAppRedux />
  </Provider>,
  document.getElementById('root')
);
