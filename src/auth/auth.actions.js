import { RESET_USER, SET_USER } from './auth.constants';

export const setUser = user => dispatch => {
  dispatch({ type: SET_USER, user });
};

export const resetUser = () => dispatch => {
  dispatch({ type: RESET_USER });
};
