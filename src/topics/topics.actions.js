import {
  LOAD_TOPICS,
  ADD_TOPIC,
  UPDATE_TOPIC,
  LOADING_TOPICS
} from './topics.constants';

export const loadTopics = ({ topicService }) => dispatch => {
  dispatch({ type: LOADING_TOPICS });
  topicService.getTopics().then(response => {
    dispatch({ type: LOAD_TOPICS, topics: response.topics });
  });
};

export const addTopic = ({ topicService, name }) => dispatch => {
  topicService.saveTopic({ name }).then(() => {
    dispatch({ type: ADD_TOPIC });
    dispatch(loadTopics({ topicService }));
  });
};

export const editTopic = ({ topicService, topicId, name }) => dispatch => {
  topicService.saveTopic({ topicId, name }).then(() => {
    dispatch({ type: UPDATE_TOPIC });
    dispatch(loadTopics({ topicService }));
  });
};
