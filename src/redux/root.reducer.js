import { combineReducers } from 'redux';
import topicsReducer from '../topics/topics.reducer';
import { notificationsReducer } from '../notifications/notifications.reducer';
import { authReducer } from '../auth/auth.reducer';

const rootReducer = combineReducers({
  topics: topicsReducer,
  notifications: notificationsReducer,
  auth: authReducer
});

export default rootReducer;
