// API
import { saveTweet } from "../../utils/api";

// LOADING MIDDLEWARE DISPATCH
import { showLoading, hideLoading } from "react-redux-loading-bar";

// ACTION CONSTANTS
export const ADD_CHIRP = "ADD_CHIRP";
export const RECEIVE_CHIRPS = "RECEIVE_CHIRPS";

// ACTION CREATOR
function addChirp(chirp) {
  return {
    type: ADD_CHIRP,
    chirp,
  };
}

export function receiveChirps(chirps) {
  return {
    type: RECEIVE_CHIRPS,
    chirps,
  };
}

// ACTION HANDLERS
export function handleAddChirp(chirp) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveTweet({
      ...chirp,
      author: authedUser,
    })
      .then((chirp) => dispatch(addChirp(chirp)))
      .then(() => dispatch(hideLoading()));
  };
}
