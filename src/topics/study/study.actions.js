import { SAVED_STUDY, SAVING_STUDY } from './study.constants';
import TopicService from '../topics.service';

export const saveStudy = ({ topicId, minutes, difficulty }) => dispatch => {
  dispatch({ type: SAVING_STUDY });
  const topicService = new TopicService();
  topicService
    .saveStudy({ topicId, minutes, difficulty })
    .then(() => {
      dispatch({ type: SAVED_STUDY });
    })
    .catch(() => {
      dispatch({ type: SAVED_STUDY });
    });
};
