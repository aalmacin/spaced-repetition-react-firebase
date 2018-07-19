import { LOGGED_IN, NOT_LOGGED_IN, SIGN_OUT, SET_USER } from './auth.constants';
import { firebaseAuth } from '../firebase/firebase';

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

export const checkLogInStatus = () => dispatch => {
  firebaseAuth().onAuthStateChanged(user => {
    if (user) {
      dispatch(setUser(user));
      dispatch(loggedIn());
    } else {
      dispatch(notLoggedIn());
    }
  });
};
