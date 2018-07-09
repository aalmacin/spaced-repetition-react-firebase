import * as R from 'ramda';

describe('Next Study Calculator', () => {
  const topics = [
    {
      name: 'Waves',
      tags: ['Science', 'Physics'],
      studies: [
        {
          date: '2018-07-05',
          difficulty: 1,
          minutes: 25
        },
        {
          date: '2018-07-05',
          difficulty: 1,
          minutes: 25
        },
        {
          date: '2018-07-06',
          difficulty: 2,
          minutes: 25
        }
      ]
    },
    {
      name: 'Sounds',
      tags: ['Science', 'Physics'],
      studies: [
        {
          date: '2018-07-05',
          difficulty: 1,
          minutes: 25
        },
        {
          date: '2018-07-05',
          difficulty: 1,
          minutes: 25
        },
        {
          date: '2018-07-06',
          difficulty: 2,
          minutes: 25
        },
        {
          date: '2018-07-08',
          difficulty: 2,
          minutes: 25
        }
      ]
    },
    {
      name: 'Evolution',
      tags: ['Science', 'Biology'],
      studies: []
    },
    {
      name: 'Limits',
      tags: ['Calculus'],
      studies: []
    }
  ];

  // expect(actual).toBe([]);
});
