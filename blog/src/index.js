import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import Stores from './Js/Stores';

ReactDOM.render(
  <React.StrictMode>
    <Provider Stores={Stores}> {/* the component Provider needs a props store  */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);