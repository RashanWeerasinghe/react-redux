import { BUY_FRUIT } from "./fruitAction";

const initialState = {
  mango: 41,
  Orange: 52,
  Banana: 60,
  Apple: 20,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case BUY_FRUIT:
      return {
        ...state,
        Apple: state.Apple - 10,
      };
    default:
      return {
        ...state,
      };
  }
}

export default reducer;
