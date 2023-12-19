import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);// lessons 2-9
// root.render(<App2 />);// lessons 10-11
//lesson 12-13 project in folder 13 Keeper App Part 1 Challenge
// root.render(<App3 />);// lessons 14-17
// root.render(<App4 />);// lesson 18
root.render(<App5 />);// lesson 19-20


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
