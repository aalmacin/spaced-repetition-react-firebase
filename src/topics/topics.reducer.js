import { LOAD_TOPICS } from './topics.constants';

const topicsReducer = (
  state = {
    all: []
  },
  action
) => {
  switch (action.type) {
    case LOAD_TOPICS:
      return {
        ...state,
        all: action.topics
      };
    default:
      return state;
  }
};

export default topicsReducer;
