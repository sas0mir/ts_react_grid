import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Input from './components/input/input';
import { RootState } from './app/store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './features/counter/counterSlice';
import { Link } from 'react-router-dom';

function App() {

  //redux sample (create another slice file in features for breadcrumbs)
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Link to={'/testrouteone'}>testrouteone</Link>
      <Link to={'/'}>APP</Link>
      <header className="App-header">
        React typescript redux-toolkit react-router test app
      </header>
      <Input label='test input' name='test_input' placeholder='placeholder' type='number'/>
      <button onClick={() => dispatch(increment())}>+++</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>---</button>
    </div>
  );
}

export default App;
