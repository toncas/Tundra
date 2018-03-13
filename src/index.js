import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

if (process.env.NODE_ENV === 'production') {
  console.log('This is Prod: ', window.location.protocol);
  if (window.location.protocol !== 'https:') {
    window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
