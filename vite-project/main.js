import { createStore, combineReducers, applyMiddleware } from "redux";

import buyFruit from "./Redux/fruitSection/fruitAction";
import buyPharmcy from "./Redux/pharmcySection/pharmcyAction";
import fruitReducer from "./Redux/fruitSection/fruitReducer";
import pharmcyReducer from "./Redux/pharmcySection/pharmcyReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { todosFuction } from "./Redux/todos/todosAction";
import todosReducer from "./Redux/todos/todosReducer";
import photoReducer from "./Redux/photoSection/photoReducer";
import { photoFunction } from "./Redux/photoSection/photoAction";

const rootReducer = combineReducers({
  fruit: fruitReducer,
  pharmcy: pharmcyReducer,
  todos: todosReducer,
  photos: photoReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
store.subscribe(() => {
  console.log(store.getState());
});
// store.dispatch(buyFruit("Test apple"));
// store.dispatch(buyPharmcy("spc test test"));
store.dispatch(todosFuction());
store.dispatch(photoFunction());
