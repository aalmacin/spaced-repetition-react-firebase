import * as R from 'ramda';
import { ADD_NOTIFICATION } from './notifications.constants';

export const notificationsReducer = (
  state = {
    notifications: []
  },
  action
) => {
  const { notifications } = state;
  switch (action.type) {
    case ADD_NOTIFICATION:
      return {
        ...state,
        notifications: R.append(action.notification, notifications)
      };
    default:
      return state;
  }
};
