import { db } from '../firebase/firebase';
import { isNil, keys } from 'ramda';

export default class TopicsService {
  getTopics = () =>
    new Promise((resolve, rejected) => {
      db.ref('/topics').on('value', snapshot => {
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

  saveTopic = ({ name }) =>
    new Promise((resolve, rejected) => {
      db.ref()
        .child('topics')
        .push(
          {
            name
          },
          function(error) {
            if (error) rejected();
            else resolve();
          }
        );
    });
}
