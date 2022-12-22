import { BUY_PHARMCY } from "./pharmcyAction";

const initialState = {
  f1: 31,
  O1: 32,
  B2: 20,
  A1: 29,
};
export function pharmcyReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_PHARMCY:
      return {
        ...state,
        A1: state.A1 - 2,
      };
    default:
      return {
        ...state,
      };
  }
}

export default pharmcyReducer;
