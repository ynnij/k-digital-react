import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // index.html에 있는 root를 잡아서 가상 돔으로 만듦
// const tick =()=>{
  root.render(
    // <React.StrictMode>
      <App /> 
    // </React.StrictMode>
  );
// }
// setInterval(()=>{tick()},1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
