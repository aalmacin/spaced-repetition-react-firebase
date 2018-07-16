import {
  LOAD_TOPICS,
  ADD_TOPIC,
  UPDATE_TOPIC,
  LOADING_TOPICS,
  SAVING_TOPIC
} from './topics.constants';
import TopicService from './topics.service';

const topicService = new TopicService();
export const loadTopics = () => dispatch => {
  dispatch({ type: LOADING_TOPICS });
  topicService.getTopics().then(response => {
    dispatch({ type: LOAD_TOPICS, topics: response.topics });
  });
};

export const addTopic = ({ name }) => dispatch => {
  dispatch({ type: SAVING_TOPIC });
  topicService.saveTopic({ name }).then(() => {
    dispatch({ type: ADD_TOPIC });
    dispatch(loadTopics());
  });
};

export const editTopic = ({ topicId, name }) => dispatch => {
  dispatch({ type: SAVING_TOPIC });
  topicService.saveTopic({ topicId, name }).then(() => {
    dispatch({ type: UPDATE_TOPIC });
    dispatch(loadTopics());
  });
};
