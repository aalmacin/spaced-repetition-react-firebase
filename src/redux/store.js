import rootReducer from './root.reducer';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk/src/index';
import logger from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
