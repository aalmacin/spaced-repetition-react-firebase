import { SAVE_STUDY } from './study.constants';
import TopicService from '../topics.service';

export const saveStudy = ({ topicId, minutes, difficulty }) => dispatch => {
  const topicService = new TopicService();
  topicService.saveStudy({ topicId, minutes, difficulty });
  console.log(topicId, minutes, difficulty);
  return { type: SAVE_STUDY };
};
