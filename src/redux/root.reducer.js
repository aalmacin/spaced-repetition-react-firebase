import { combineReducers } from 'redux';
import topicsReducer from '../topics/topics.reducer';
import studyReducer from '../topics/study/study.reducer';

const rootReducer = combineReducers({
  topics: topicsReducer,
  study: studyReducer
});

export default rootReducer;
