import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
// App 컴포넌트 함수를 실행시켜서 반환하는 react element를 가져오기

// root.render(App());
// render함수 = react element를 인자로 받아서 dom element를 그려준다.

// <React.StrictMode>
//   <App />
// </React.StrictMode>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
