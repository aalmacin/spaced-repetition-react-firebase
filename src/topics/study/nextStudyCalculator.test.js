import * as R from 'ramda';
import moment from 'moment';

const determineBox = studies =>
  R.pipe(
    R.takeWhile(R.propEq('difficult', false)),
    R.length,
    R.inc,
    R.clamp(1, 5)
  )(studies);

// Colours
// Box 1 - Red
// Box 2 - Orange
// Box 3 - Yellow
// Box 4 - Green
// Box 5 - Blue

// Database structure
const stub = {
  topics: [
    {
      title: 'Waves',
      studies: [
        {
          note: 'There are two types of waves.',
          difficult: false,
          minutes: 25,
          date: '2018-07-12'
        },
        { difficult: true, minutes: 25, date: '2018-07-11' },
        { difficult: false, minutes: 25, date: '2018-07-10' },
        { difficult: false, minutes: 25, date: '2018-07-9' },
        {
          note: 'Amplitude is the intensity of the wave at a given point.',
          difficult: true,
          minutes: 25,
          date: '2018-07-8'
        }
      ],
      tags: ['Physics', 'Science']
    }
  ]
};

const setDate = (box, date) =>
  moment(date)
    .add(R.nth(box - 1, [0, 3, 7, 14, 30]), 'days')
    .format('YYYY-MM-DD');

const getNextStudy = R.curry(studies =>
  R.pipe(
    R.converge(setDate, [
      determineBox,
      R.pipe(
        R.head,
        R.prop('date')
      )
    ])
  )(studies)
);

describe('Show next study', () => {
  describe('Using Calculator', () => {
    test('correct date for box 5', () => {
      const studies = [
        { difficult: false, minutes: 25, date: '2018-07-12' },
        { difficult: false, minutes: 25, date: '2018-07-11' },
        { difficult: false, minutes: 25, date: '2018-07-10' },
        { difficult: false, minutes: 25, date: '2018-07-9' },
        { difficult: true, minutes: 25, date: '2018-07-8' },
        { difficult: false, minutes: 25, date: '2018-07-7' }
      ];
      const expected = '2018-08-11';
      const actual = getNextStudy(studies);

      expect(actual).toBe(expected);
    });

    test('correct date for box 4', () => {
      const studies = [
        { difficult: false, minutes: 25, date: '2018-07-11' },
        { difficult: false, minutes: 25, date: '2018-07-10' },
        { difficult: false, minutes: 25, date: '2018-07-9' },
        { difficult: true, minutes: 25, date: '2018-07-8' },
        { difficult: false, minutes: 25, date: '2018-07-7' }
      ];
      const expected = '2018-07-25';
      const actual = getNextStudy(studies);

      expect(actual).toBe(expected);
    });

    test('correct date for box 3', () => {
      const studies = [
        { difficult: false, minutes: 25, date: '2018-07-10' },
        { difficult: false, minutes: 25, date: '2018-07-9' },
        { difficult: true, minutes: 25, date: '2018-07-8' },
        { difficult: false, minutes: 25, date: '2018-07-7' }
      ];
      const expected = '2018-07-17';
      const actual = getNextStudy(studies);

      expect(actual).toBe(expected);
    });

    test('correct date for box 2', () => {
      const studies = [
        { difficult: false, minutes: 25, date: '2018-07-9' },
        { difficult: true, minutes: 25, date: '2018-07-8' },
        { difficult: false, minutes: 25, date: '2018-07-7' }
      ];
      const expected = '2018-07-12';
      const actual = getNextStudy(studies);

      expect(actual).toBe(expected);
    });

    test('correct date for box 1', () => {
      const studies = [
        { difficult: true, minutes: 25, date: '2018-07-8' },
        { difficult: false, minutes: 25, date: '2018-07-7' }
      ];
      const expected = '2018-07-08';
      const actual = getNextStudy(studies);

      expect(actual).toBe(expected);
    });
  });
});

describe('Next Study Calculator', () => {
  // There are 5 boxes, Box 1 is the box where immediate action is required.
  // Box 2 - 3 days
  // Box 3 - 1 week
  // Box 4 - 2 weeks
  // Box 5 - 1 month
  // Where the topic should be is the purpose of this determineBox
  // Every time a person makes a mistake, the item will be sent to Box 1. If the item is currently in Box 5,
  // it will be set to Box 1. After the person studies the item again, the item will then be placed on Box 2.

  describe('There are no studies', () => {
    const studies = [];
    const expectedBox = 1;

    it('Will be set to box 1', () => {
      const actual = determineBox(studies);
      expect(actual).toBe(expectedBox);
    });
  });

  describe('There are studies', () => {
    describe('Studies have fails 4 studies ago', function() {
      it('Will be set to box 4', () => {
        const studies = [
          { difficult: false, minutes: 25, date: '2018-07-11' },
          { difficult: false, minutes: 25, date: '2018-07-10' },
          { difficult: false, minutes: 25, date: '2018-07-9' },
          { difficult: true, minutes: 25, date: '2018-07-8' },
          { difficult: false, minutes: 25, date: '2018-07-7' }
        ];
        const expected = 4;
        const actual = determineBox(studies);

        expect(actual).toBe(expected);
      });
    });

    describe('Studies have fails the last study', function() {
      it('Will be set to box 1', () => {
        const studies = [
          { difficult: true, minutes: 25, date: '2018-07-11' },
          { difficult: false, minutes: 25, date: '2018-07-10' },
          { difficult: false, minutes: 25, date: '2018-07-9' },
          { difficult: true, minutes: 25, date: '2018-07-8' }
        ];
        const expected = 1;
        const actual = determineBox(studies);

        expect(actual).toBe(expected);
      });
    });
  });
});
