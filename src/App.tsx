import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Input from './components/input/input';
import { RootState } from './app/store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './features/counter/counterSlice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestRouteOne from './routes/testrouteone';
import Navigation from './components/navigation';

function App() {

  //redux sample (create another slice file in features for breadcrumbs)
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Navigation/>
      <Input label='test input' name='test_input' placeholder='placeholder' type='number'/>
      <button onClick={() => dispatch(increment())}>+++</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>---</button>
    </div>
  );
}

export default App;
