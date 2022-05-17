import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { navigationRoutes } from './constants';
import Navigation from './components/navigation';
import { getComponent } from './constants';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Navigation/>
      <Routes>
          {
            navigationRoutes.map((route, index) => {
              if (route.path === '*') return <Route path={route.path} element={<div>NOT¯\_(ツ)_/¯FOUND</div>}/>
              if (route.subroutes) {
                // const subRoutes = route.subroutes.map((sub, idx) => {
                //   return <Route path={sub.path} element={getElement(sub.element)} key={idx}/>
                // })
                return <Route path={route.path} element={getComponent(route.element)} key={index}>
                  {route.subroutes.map((sub, idx) => {
                    return <Route path={sub.path} element={getComponent(sub.element)} key={idx}/>
                  })}
                </Route>
              } else {
                return <Route path={route.path} element={getComponent(route.element)} key={index}/>
              }
            })
          }
          {/* <Route path="/" element={<App />} />
          <Route path="testrouteone" element={<TestRouteOne />}/>
          <Route path="/clientlist" element={<ClientList/>}>
            <Route path=":clientId" element={<div>CLIENT ROUTE TEST</div>}/>
            <Route path="new" element={<div>NEW CLIENT ROUTE TEST</div>}/>
            <Route path="orders" element={<div>ORDERS ROUTE TEST</div>}/>
            <Route path="clients" element={<div>CLIENTS ROUTE TEST</div>}/>
            <Route path="goods" element={<div>GOODS ROUTE TEST</div>}/>
            <Route path='prices' element={<div>PRICES</div>}/>
          </Route>
          <Route path="*" element={<div>NOT¯\_(ツ)_/¯FOUND</div>} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
