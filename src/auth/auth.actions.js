import { LOGGED_IN, NOT_LOGGED_IN, SIGN_OUT, SET_USER } from './auth.constants';

export const setUser = user => dispatch => {
  dispatch({ type: SET_USER, user });
};

export const signOut = () => dispatch => {
  dispatch({ type: SIGN_OUT });
};

export const loggedIn = () => dispatch => {
  dispatch({ type: LOGGED_IN });
};

export const notLoggedIn = () => dispatch => {
  dispatch({ type: NOT_LOGGED_IN });
};
