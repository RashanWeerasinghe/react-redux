import { PHOTO_LOADING, PHOTO_SUCCESS } from "./photoAction";

const initialState = {
  x: false,
  photos: [],
};

export function photoReducer(state = initialState, action) {
  switch (action.type) {
    case PHOTO_LOADING:
      return {
        x: "LOADIND",
        ...state,
      };
    case PHOTO_SUCCESS:
      return {
        x: "SUCCESS",
        photos: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default photoReducer;
