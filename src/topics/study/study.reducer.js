import { SAVED_STUDY, SAVING_STUDY } from './study.constants';

const studyReducer = (
  state = {
    savingStudy: false
  },
  action
) => {
  switch (action.type) {
    case SAVING_STUDY:
      return {
        ...state,
        savingStudy: true
      };
    case SAVED_STUDY:
      return {
        ...state,
        savingStudy: false
      };
    default:
      return state;
  }
};
export default studyReducer;
