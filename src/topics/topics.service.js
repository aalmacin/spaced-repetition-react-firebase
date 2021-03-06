import { db } from '../firebase/firebase';
import { isNil, keys } from 'ramda';

export default class TopicService {
  getTopics = uid =>
    new Promise((resolve, rejected) => {
      db.ref(`/topics/${uid}`).on('value', snapshot => {
        const dbTopics = snapshot.val();
        if (!isNil(dbTopics)) {
          // TODO: Refactor this later
          const dbKeys = keys(dbTopics);

          const topics = dbKeys.map(key => {
            const topic = dbTopics[key];
            return {
              id: key,
              name: topic.name
            };
          });

          resolve({
            topics
          });
        } else rejected('Topics not found');
      });
    });

  saveTopic = ({ uid, topicId, name }) =>
    new Promise((resolve, rejected) => {
      const topicsRef = db.ref('topics').child(uid);
      if (isNil(topicId)) {
        topicsRef.push(
          {
            name
          },
          function(error) {
            if (error) rejected();
            else resolve();
          }
        );
      } else {
        topicsRef.child(topicId).set(
          {
            name
          },
          function(error) {
            if (error) rejected();
            else resolve();
          }
        );
      }
    });

  saveStudy = ({ topicId, minutes, difficulty }) =>
    new Promise((resolve, rejected) => {
      if (isNil(topicId)) throw new Error('Topic ID must be passed');
      const topicRef = db
        .ref()
        .child('topics')
        .child(topicId)
        .child('studies');
      topicRef.push({ minutes, difficulty }, function(error) {
        if (error) rejected();
        else resolve();
      });
    });
}
