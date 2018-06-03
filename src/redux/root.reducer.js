import { combineReducers } from 'redux';
import topicsReducer from '../topics/topics.reducer';

const rootReducer = combineReducers({
  topics: topicsReducer
});

export default rootReducer;
