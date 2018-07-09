import {
  SAVED_STUDY,
  SAVING_STUDY,
  SUCCESSFULLY_SAVED_STUDY
} from './study.constants';
import TopicService from '../topics.service';
import { fireNotification } from '../../notifications/notifications.actions';
import TopicStubService from '../topicsStub.service';
import { loadTopics } from '../topics.actions';

export const saveStudy = ({ topicId, minutes, difficulty }) => dispatch => {
  dispatch({ type: SAVING_STUDY });
  const topicService = new TopicStubService();
  topicService
    .saveStudy({ topicId, minutes, difficulty })
    .then(() => {
      dispatch(fireNotification({ message: SUCCESSFULLY_SAVED_STUDY }));
      dispatch({ type: SAVED_STUDY });
      dispatch(loadTopics());
    })
    .catch(() => {
      dispatch({ type: SAVED_STUDY });
      dispatch(loadTopics());
    });
};
