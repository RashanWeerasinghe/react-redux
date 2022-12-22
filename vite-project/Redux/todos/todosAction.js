import axios from "axios";

export const TODOS_LOAD = "TODOS_LOAD";
export const TODOS_SUCCESS = "TODOS_SUCCESS";

function todosLoading() {
  return {
    type: TODOS_LOAD,
  };
}

function todosSuccess(todos) {
  return {
    type: TODOS_SUCCESS,
    payload: todos,
  };
}

export function todosFuction() {
  return function (dispatch, getState) {
    dispatch(todosLoading());
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      dispatch(todosSuccess(res.data));
    });
  };
}
