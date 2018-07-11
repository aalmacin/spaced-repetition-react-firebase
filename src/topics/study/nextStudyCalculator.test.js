import * as R from 'ramda';

const calculator = studies =>
  R.pipe(
    R.takeWhile(R.propEq('difficult', false)),
    R.length,
    R.inc,
    R.clamp(1, 5)
  )(studies);

describe('Next Study Calculator', () => {
  // There are 5 boxes, Box 1 is the box where immediate action is required.
  // Box 2 - 3 days
  // Box 3 - 1 week
  // Box 4 - 2 weeks
  // Box 5 - 1 month
  // Where the topic should be is the purpose of this calculator
  // Every time a person makes a mistake, the item will be sent to Box 1. If the item is currently in Box 5,
  // it will be set to Box 1. After the person studies the item again, the item will then be placed on Box 2.

  describe('There are no studies', () => {
    const studies = [];
    const expectedBox = 1;

    it('Will be set to box 1', () => {
      const actual = calculator(studies);
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
        const actual = calculator(studies);

        expect(actual).toBe(expected);
      });
    });

    describe('Studies have fails the last study', function() {
      it('Will be set to box 4', () => {
        const studies = [
          { difficult: true, minutes: 25, date: '2018-07-11' },
          { difficult: false, minutes: 25, date: '2018-07-10' },
          { difficult: false, minutes: 25, date: '2018-07-9' },
          { difficult: true, minutes: 25, date: '2018-07-8' }
        ];
        const expected = 1;
        const actual = calculator(studies);

        expect(actual).toBe(expected);
      });
    });
  });
});
