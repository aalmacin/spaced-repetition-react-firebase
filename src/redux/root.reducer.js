import { combineReducers } from 'redux';
import topicsReducer from '../topics/topics.reducer';
import studyReducer from '../topics/study/study.reducer';
import { notificationsReducer } from '../notifications/notifications.reducer';

const rootReducer = combineReducers({
  topics: topicsReducer,
  study: studyReducer,
  notifications: notificationsReducer
});

export default rootReducer;
