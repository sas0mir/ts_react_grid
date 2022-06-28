import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);
const session = { user: 'Sas', role: 'admin' };//todo backend
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
