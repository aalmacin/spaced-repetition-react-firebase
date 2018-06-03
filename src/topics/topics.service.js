export default class TopicsService {
  getTopics = () =>
    new Promise((resolve, rejected) => {
      resolve({
        topics: [
          { id: 1, name: 'Math' },
          { id: 2, name: 'Science' },
          { id: 3, name: 'English' }
        ]
      });
    });
}
