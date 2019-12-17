import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import allReducer from './reducers';  //No need to add index, directly identifies it. 
import { Provider } from 'react-redux';  //connects our store to entire app down here

let myStore =createStore(allReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


//Store -> Globalized State 

// //Action 
// const increment = () => {
//     return {
//         type:'INCREMENT'   //name of function
//     }
// }

// const decrement = () => {
//     return {
//         type: 'DECREMENT' 
//    }
// }


// //Reducer



// //Display it in console

// store.subscribe(() => console.log(store.getState()));

// //Dispatch






ReactDOM.render(
    <Provider store={myStore}>
       <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
