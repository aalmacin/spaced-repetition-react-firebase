import {
  SELECT_TOPIC,
  ADD_TOPIC,
  LOAD_TOPICS,
  UPDATE_TOPIC
} from './topics.constants';

const topicsReducer = (
  state = {
    all: [],
    events: [],
    selectedTopic: null,
    selectedTopicId: null
  },
  action
) => {
  switch (action.type) {
    case LOAD_TOPICS:
      return {
        ...state,
        all: action.topics
      };
    case SELECT_TOPIC:
      return {
        ...state,
        selectedTopic: action.selectedTopic,
        selectedTopicId: action.selectedTopicId
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
