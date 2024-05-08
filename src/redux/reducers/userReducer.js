import {
  LOGIN_FAILED,
  LOGOUT_REQUESTED,
  TOKEN_RETREIVED,
} from "../actions/login.action";

import { PROFILE_RETREIVED, USERNAME_UPDATED } from "../actions/profile.action";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_FAILED:
      return action.payload;
    case TOKEN_RETREIVED:
      return action.payload;
    case PROFILE_RETREIVED:
      return action.payload;
    case USERNAME_UPDATED:
      return { ...state, userName: action.payload };
    case LOGOUT_REQUESTED:
      localStorage.clear();
      return null;
    default:
      return state;
  }
}
