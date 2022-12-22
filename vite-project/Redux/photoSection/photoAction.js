import axios from "axios";

export const PHOTO_LOADING = "PHOTO_LOADING";
export const PHOTO_SUCCESS = "PHOTO_SUCCESS";

export function photoLoading() {
  return {
    type: PHOTO_LOADING,
    payload: PHOTO_SUCCESS,
  };
}

export function photoSuccess(photos) {
  return {
    type: PHOTO_SUCCESS,
    payload: photos,
  };
}

export function photoFunction() {
  return async function (dispatch, getState) {
    dispatch(photoLoading());
    await axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        dispatch(photoSuccess(res.data));
      });
  };
}
