import * as R from 'ramda';

const stub = {
  topics: [
    {
      name: 'Sound Waves',
      info: [
        {
          content: 'Sound Waves can be used to map the sea floor',
          difficult: true
        },
        {
          content: 'Sound Waves are longitudinal waves',
          difficult: false
        }
      ],
      tags: ['as32f3', 'as33f3'],
      studies: [
        { difficult: false, minutes: 25, date: '2018-07-12' },
        { difficult: false, minutes: 25, date: '2018-07-11' },
        { difficult: true, minutes: 25, date: '2018-07-10' },
        { difficult: true, minutes: 25, date: '2018-07-09' }
      ]
    },
    {
      name: 'Evolution',
      info: [
        {
          content: 'Charles Darwin',
          difficult: true
        }
      ],
      tags: ['as33f3'],
      studies: [
        { difficult: false, minutes: 25, date: '2018-07-12' },
        { difficult: false, minutes: 25, date: '2018-07-11' },
        { difficult: true, minutes: 25, date: '2018-07-10' },
        { difficult: true, minutes: 25, date: '2018-07-09' }
      ]
    }
  ],
  tags: [
    {
      id: 'as32f3',
      name: 'Physics'
    },
    {
      id: 'as33f3',
      name: 'Science'
    }
  ]
};

export default class TopicService {
  getTopics = () =>
    new Promise(resolve => {
      const combineTagsForTopics = (tags, topicTags) =>
        R.innerJoin((tag, topicTag) => tag.id === topicTag, tags, topicTags);

      const mf = (topics, tags) =>
        R.map(r =>
          R.assoc(
            'tags',

            combineTagsForTopics(tags, r.tags),

            r
          )
        )(topics);

      resolve(mf(stub.topics, stub.tags));
    });

  getTags = () =>
    new Promise(resolve => {
      resolve(stub.tags);
    });
}
