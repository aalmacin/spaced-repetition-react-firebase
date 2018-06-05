import { LOAD_TOPICS, ADD_TOPIC } from './topics.constants';
import TopicsService from './topics.service';

const topicsService = new TopicsService();

export const loadTopics = () => dispatch => {
  topicsService.getTopics().then(response => {
    dispatch({ type: LOAD_TOPICS, topics: response.topics });
  });
};

export const addTopic = ({ name }) => dispatch => {
  topicsService.saveTopic({ name }).then(() => {
    dispatch({ type: ADD_TOPIC });
  });
};
