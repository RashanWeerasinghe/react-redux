import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers';
const initailState={};
const middleware=[thunk];




const store=createStore(
    rootReducer,
    initailState,
   
      applyMiddleware(...middleware),
   
    );


export default store;