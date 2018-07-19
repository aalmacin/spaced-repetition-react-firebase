import { LOGGED_IN, NOT_LOGGED_IN, SIGN_OUT, SET_USER } from './auth.constants';

export const authReducer = (
  state = {
    user: null,
    loggedIn: false,
    pending: true
  },
  action
) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user
      };
    case SIGN_OUT:
      return {
        ...state,
        user: null,
        pending: true,
        loggedIn: false
      };
    case LOGGED_IN:
      return {
        ...state,
        loggedIn: true,
        pending: false
      };
    case NOT_LOGGED_IN:
      return {
        ...state,
        loggedIn: false,
        pending: false
      };
    default:
      return state;
  }
};
