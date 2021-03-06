import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Input from './components/input/input';
import { RootState } from './app/store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './features/counter/counterSlice';
import { goto, goback } from './features/navigation/navigationSlice';
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
import { navigationLinks, ILink } from './constants';

function App() {

  //redux sample (create another slice file in features for breadcrumbs)
  const count = useSelector((state: RootState) => state.counter.value);
  const navState = useSelector((state: RootState) => state.navigation);
  const dispatch = useDispatch();
  const session = { user: 'Sas', role: 'admin' };//todo backend

  const handleLinkClick = (link:ILink) => {
    let newHistory = [...navState.history, link.text];
    let newState = { current: link.to, prev: navState.current, history: newHistory };
    dispatch(goto(newState))
  }

  return (
    <div className="App">
      <Router>
        <nav className='nav_main'>
          {navigationLinks ? navigationLinks.map(link => {
            return <Link to={link.to} key={link.code} onClick={e => handleLinkClick(link)}>{link.text}</Link>
          }) : null}
        </nav>
        <Routes>
          <Route path="/main" element={<MainPage/>}/>
          <Route path="/grids" element={<Grids/>}>
            <Route path="users" element={<Grids/>}/>
            <Route path="posts" element={<Grids/>}/>
            <Route path="comments" element={<Grids/>}/>
            <Route path="albums" element={<Grids/>}/>
            <Route path="photos" element={<Grids/>}/>
            <Route path="todos" element={<Grids/>}/>
          </Route>
          <Route path="/api" element={<Api/>}/>
          <Route path="/test" element={<TestRouteOne/>}/>
          <Route path="*" element={<div>NOT??\_(???)_/??FOUND</div>} />
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
