import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from './actions';
import {decrement} from './actions';
import './App.css';

function App() {
  const counter = useSelector(state => state.counter)  //the state in redux developer tool.
  const dispatch = useDispatch();
  return (
    <div className="App">
     <h1>Counter {counter}</h1>
     <button onClick={() => dispatch(increment())}>+</button>
     <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
