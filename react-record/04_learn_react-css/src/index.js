import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
// import App from './01_inline-style-css/App';
// import App from './02_normal-files-css/App'
// import App from './03_css-modules/App'
// import App from './04_less-file-css/App'
// import App from './05_css-in-js/App'
import App from './06_classnams-library/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={{color: 'purple', size: '40px'}}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// ES6： 标签模板字符串
// 1. 模板字符串
// const name = 'why';
// const age = 18
// 2. 标签模板字符串的使用
// function foo(...args) {
//   console.log(args);

// }

// foo`My name is ${name}, age is ${age}`
