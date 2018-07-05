import {
  SAVED_STUDY,
  SAVING_STUDY,
  SUCCESSFULLY_SAVED_STUDY
} from './study.constants';
import TopicService from '../topics.service';
import { fireNotification } from '../../notifications/notifications.actions';

export const saveStudy = ({ topicId, minutes, difficulty }) => dispatch => {
  dispatch({ type: SAVING_STUDY });
  const topicService = new TopicService();
  topicService
    .saveStudy({ topicId, minutes, difficulty })
    .then(() => {
      dispatch(fireNotification({ message: SUCCESSFULLY_SAVED_STUDY }));
      dispatch({ type: SAVED_STUDY });
    })
    .catch(() => {
      dispatch({ type: SAVED_STUDY });
    });
};
