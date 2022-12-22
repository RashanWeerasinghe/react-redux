import { TODOS_LOAD, TODOS_SUCCESS } from "./todosAction";

const initialState = {
  x: false,
  todos: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case TODOS_LOAD:
      return {
        ...state,
        x: "Loading",
      };
    case TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default reducer;
