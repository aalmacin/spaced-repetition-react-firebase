import { LOAD_TOPICS, ADD_TOPIC, UPDATE_TOPIC } from './topics.constants';
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
    dispatch(loadTopics());
  });
};

export const editTopic = ({ topicId, name }) => dispatch => {
  topicsService.saveTopic({ topicId, name }).then(() => {
    dispatch({ type: UPDATE_TOPIC });
    dispatch(loadTopics());
  });
};
