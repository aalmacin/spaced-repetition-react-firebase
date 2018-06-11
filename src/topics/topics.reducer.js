import { ADD_TOPIC, LOAD_TOPICS, UPDATE_TOPIC } from './topics.constants';

const topicsReducer = (
  state = {
    all: [],
    events: []
  },
  action
) => {
  switch (action.type) {
    case LOAD_TOPICS:
      return {
        ...state,
        all: action.topics
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
