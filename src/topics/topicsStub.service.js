import * as R from 'ramda';

window.topics = {
  topics: [
    {
      id: '--fff333',
      name: 'Waves',
      tags: ['Physics', 'Studies'],
      studies: []
    }
  ]
};

export default class TopicStubService {
  getTopics = () => new Promise(r => r(window.topics));

  saveTopic = ({ topicId, name }) =>
    new Promise(r => {
      let topic = R.find(r => r.topicId === topicId, window.topics);
      if (R.isNil(topic)) {
        window.topics.topics = R.append(
          { id: topicId, name, tags: [], studies: [] },
          window.topics
        );
      } else {
        const topicIdx = R.findIndex(
          r => r.id === topicId,
          window.topics.topics
        );
        window.topics.topics = R.update(
          topicIdx,
          {
            ...topic,
            id: topicId,
            name
          },
          window.topics.topics
        );
      }
      r();
    });

  saveStudy = ({ topicId, minutes, difficulty }) =>
    new Promise((r, e) => {
      const topic = R.find(r => r.id === topicId, window.topics.topics);

      if (R.isNil(topic)) new Error('Topic id not passed.');
      else {
        const topicIdx = R.findIndex(
          r => r.id === topicId,
          window.topics.topics
        );
        window.topics.topics = R.update(
          topicIdx,
          {
            ...topic,
            studies: [...topic.studies, { minutes: 1, difficulty: 1 }]
          },
          window.topics.topics
        );
      }

      r();
    });
}
