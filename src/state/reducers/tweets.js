import { RECEIVE_USERS } from "../actions/users";
import { ADD_CHIRP } from "../actions/chirps";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_CHIRP:
      const chirp = action.chirp;
      const { author, id } = chirp;

      return {
        ...state,
        [author]: {
          ...[author],
          chirps: state[author].chirps.concat([id]),
        },
      };
    default:
      return state;
  }
}
