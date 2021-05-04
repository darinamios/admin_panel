import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TextEditor from './components/TextEditor';
import Calendar from './components/Calendar';

ReactDOM.render(
  <React.StrictMode>
    <TextEditor name="Тут будет ваш текст" emptyText="Вбивай уже..." value="some text"/>
    <Calendar name="Тут будет ваша дата" emptyText="Вбивай уже..."/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
