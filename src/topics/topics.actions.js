import {
  LOAD_TOPICS,
  ADD_TOPIC,
  UPDATE_TOPIC,
  LOADING_TOPICS,
  SAVING_TOPIC
} from './topics.constants';
import TopicService from './topics.service';

export const loadTopics = () => dispatch => {
  dispatch({ type: LOADING_TOPICS });
  const topicService = new TopicService();
  topicService.getTopics().then(response => {
    dispatch({ type: LOAD_TOPICS, topics: response.topics });
  });
};

export const addTopic = ({ name }) => dispatch => {
  const topicService = new TopicService();
  dispatch({ type: SAVING_TOPIC });
  topicService.saveTopic({ name }).then(() => {
    dispatch({ type: ADD_TOPIC });
    dispatch(loadTopics());
  });
};

export const editTopic = ({ topicId, name }) => dispatch => {
  const topicService = new TopicService();
  dispatch({ type: SAVING_TOPIC });
  topicService.saveTopic({ topicId, name }).then(() => {
    dispatch({ type: UPDATE_TOPIC });
    dispatch(loadTopics());
  });
};
