import { LOAD_TOPICS } from './topics.constants';
import TopicsService from './topics.service';

const topicsService = new TopicsService();

export const loadTopics = () => dispatch => {
  topicsService.getTopics().then(response => {
    dispatch({ type: LOAD_TOPICS, topics: response.topics });
  });
};
