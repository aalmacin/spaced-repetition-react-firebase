import {
  ADD_TOPIC,
  LOAD_TOPICS,
  LOADING_TOPICS,
  UPDATE_TOPIC
} from './topics.constants';

const topicsReducer = (
  state = {
    loadedTopics: false,
    all: [],
    events: []
  },
  action
) => {
  switch (action.type) {
    case LOAD_TOPICS:
      return {
        ...state,
        all: action.topics,
        loadedTopics: true
      };
    case LOADING_TOPICS:
      return {
        ...state,
        loadedTopics: false
      };
    case ADD_TOPIC:
      return {
        ...state,
        events: [...state.events, { event: 'Added new topic' }]
      };
    case UPDATE_TOPIC:
      return {
        ...state,
        events: [...state.events, { event: 'Updated topic' }]
      };
    default:
      return state;
  }
};

export default topicsReducer;
