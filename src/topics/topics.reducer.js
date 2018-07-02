import {
  ADD_TOPIC,
  LOAD_TOPICS,
  LOADING_TOPICS,
  SAVING_TOPIC,
  UPDATE_TOPIC
} from './topics.constants';

const topicsReducer = (
  state = {
    loadedTopics: false,
    all: [],
    events: [],
    savingTopic: false
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
        savingTopic: false,
        events: [...state.events, { event: 'Added new topic' }]
      };
    case UPDATE_TOPIC:
      return {
        ...state,
        savingTopic: false,
        events: [...state.events, { event: 'Updated topic' }]
      };
    case SAVING_TOPIC:
      return {
        ...state,
        savingTopic: true
      };
    default:
      return state;
  }
};

export default topicsReducer;
