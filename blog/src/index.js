import React from 'react';
import ReactDOM from 'react-dom/client'; // Remplacez 'react-dom' par 'react-dom/client'
import App from './App';
import { Provider } from 'react-redux';
import store from './Js/Stores/store'; // Assurez-vous que le chemin vers votre store est correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Le composant Provider a besoin de la prop store */}
      <App />
    </Provider>
  </React.StrictMode>
);
