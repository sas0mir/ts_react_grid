import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Input from './components/input/input';
import { RootState } from './app/store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './features/counter/counterSlice';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from 'react-router-dom';
import MainPage from './routes/MainPage';
import Grids from './routes/Grids';
import Api from './routes/Api';
import TestRouteOne from './routes/testrouteone';

function App() {

  //redux sample (create another slice file in features for breadcrumbs)
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const session = { user: 'Sas', role: 'admin' };//todo backend

  return (
    <div className="App">
      <Router>
        <nav className='nav_main'>
          <Link to="/main">Main Page</Link>
          <Link to="/grids">Grid Templates</Link>
          <Link to="/api">API</Link>
          <Link to="/test">Test</Link>
        </nav>
        <Routes>
          <Route path="/main" element={<MainPage/>}/>
          <Route path="/grids" element={<Grids/>}>
            <Route path="template1" element={<Grids/>}/>
            <Route path="template2" element={<Grids/>}/>
            <Route path="template3" element={<Grids/>}/>
            <Route path="template4" element={<Grids/>}/>
            <Route path="template5" element={<Grids/>}/>
            <Route path="template6" element={<Grids/>}/>
          </Route>
          <Route path="/api" element={<Api/>}/>
          <Route path="/test" element={<TestRouteOne/>}/>
          <Route path="*" element={<div>NOT¯\_(ツ)_/¯FOUND</div>} />
        </Routes>
      </Router>
      <Input label='test input' name='test_input' placeholder='placeholder' type='number'/>
      <button onClick={() => dispatch(increment())}>+++</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>---</button>
    </div>
  );
}

export default App;
