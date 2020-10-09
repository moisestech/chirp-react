import { getInitialData } from "../utils/api";
import { setAuthedUser } from "../actions/authedUser";
import { receiveUsers } from "../actions/users";
import { receiveChirps } from "../actions/chirps";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const AUTHED_ID = "moisessanabria";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());

    return getInitialData().then(({ users, tweets }) => {
      const chirps = tweets;

      dispatch(hideLoading());
      dispatch(receiveUsers(users));
      dispatch(receiveChirps(chirps));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
