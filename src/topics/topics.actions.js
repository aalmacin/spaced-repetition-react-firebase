import {
  LOAD_TOPICS,
  ADD_TOPIC,
  UPDATE_TOPIC,
  LOADING_TOPICS,
  SAVING_TOPIC
} from './topics.constants';
import TopicService from './topics.service';

const topicService = new TopicService();
export const loadTopics = () => (dispatch, getState) => {
  const state = getState();
  const {
    auth: {
      user: { uid }
    }
  } = state;
  dispatch({ type: LOADING_TOPICS });
  topicService.getTopics(uid).then(response => {
    dispatch({ type: LOAD_TOPICS, topics: response.topics });
  });
};

export const addTopic = ({ name }) => (dispatch, getState) => {
  const state = getState();
  const {
    auth: {
      user: { uid }
    }
  } = state;
  dispatch({ type: SAVING_TOPIC });
  topicService.saveTopic({ uid, name }).then(() => {
    dispatch({ type: ADD_TOPIC });
    dispatch(loadTopics());
  });
};

export const editTopic = ({ topicId, name }) => (dispatch, getState) => {
  const state = getState();
  const {
    auth: {
      user: { uid }
    }
  } = state;
  dispatch({ type: SAVING_TOPIC });
  topicService.saveTopic({ topicId, name, uid }).then(() => {
    dispatch({ type: UPDATE_TOPIC });
    dispatch(loadTopics());
  });
};
