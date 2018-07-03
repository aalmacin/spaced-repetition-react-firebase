import { SAVE_STUDY } from './study.constants';

export const saveStudy = ({ topicId, minutes, difficulty }) => ({
  type: SAVE_STUDY
});
