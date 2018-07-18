import { RESET_USER, SET_USER } from './auth.constants';

export const authReducer = (
  state = {
    user: null
  },
  action
) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user
      };
    case RESET_USER:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};
