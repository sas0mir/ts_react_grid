import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestRouteOne from './routes/testrouteone'
import ClientList from './routes/clientlist';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="testrouteone" element={<TestRouteOne />}/>
          <Route path="/clientlist" element={<ClientList/>}>
            <Route path=":clientId" element={<div>CLIENT ROUTE TEST</div>}/>
            <Route path="new" element={<div>NEW CLIENT ROUTE TEST</div>}/>
            <Route path="orders" element={<div>ORDERS ROUTE TEST</div>}/>
            <Route path="clients" element={<div>CLIENTS ROUTE TEST</div>}/>
            <Route path="goods" element={<div>GOODS ROUTE TEST</div>}/>
          </Route>
          <Route path="*" element={<div>NOT¯\_(ツ)_/¯FOUND</div>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
