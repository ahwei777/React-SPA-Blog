import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Board/App';

// 引入主題(可設定類似 mixin 的全域變數供使用
import { ThemeProvider } from 'styled-components';

// 設定常用/指定屬性
const theme = {
  colors: {
    primary_300: '#ff7979',
    primary_400: '#e33e3e',
    primary_500: `#af0505`,
  }
}

// <React.StrictMode> 嚴格模式可能會造成偵錯問題，可先取消

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  ,
  document.getElementById('root')
);
