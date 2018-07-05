import { ADD_NOTIFICATION, DANGER, SUCCESS } from './notifications.constants';
import _ from 'lodash';

export const fireNotification = ({ message, type }) => dispatch => {
  dispatch({
    type: ADD_NOTIFICATION,
    notification: {
      message,
      type: _.isNil(type) ? SUCCESS : type
    }
  });
};
