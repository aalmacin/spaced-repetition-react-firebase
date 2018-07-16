import { getNextStudy } from './studyDataTransformation';

const testCorrectNextDate = (expected, studies) =>
  test('correct next date', () => {
    const actual = getNextStudy(studies);
    expect(actual.next_date).toBe(expected);
  });

describe('Show next study', () => {
  describe('Using Calculator', () => {
    describe('box 5', () => {
      const studies = [
        { difficult: false, minutes: 25, date: '2018-07-12' },
        { difficult: false, minutes: 25, date: '2018-07-11' },
        { difficult: false, minutes: 25, date: '2018-07-10' },
        { difficult: false, minutes: 25, date: '2018-07-10' },
        { difficult: false, minutes: 25, date: '2018-07-9' },
        { difficult: true, minutes: 25, date: '2018-07-8' },
        { difficult: false, minutes: 25, date: '2018-07-7' }
      ];
      const expected = '2018-08-11';
      testCorrectNextDate(expected, studies);
    });

    describe('box 4', () => {
      const studies = [
        { difficult: false, minutes: 25, date: '2018-07-11' },
        { difficult: false, minutes: 25, date: '2018-07-10' },
        { difficult: false, minutes: 25, date: '2018-07-9' },
        { difficult: true, minutes: 25, date: '2018-07-8' },
        { difficult: false, minutes: 25, date: '2018-07-7' }
      ];
      const expected = '2018-07-25';
      testCorrectNextDate(expected, studies);
    });

    describe('box 3', () => {
      const studies = [
        { difficult: false, minutes: 25, date: '2018-07-10' },
        { difficult: false, minutes: 25, date: '2018-07-9' },
        { difficult: true, minutes: 25, date: '2018-07-8' },
        { difficult: false, minutes: 25, date: '2018-07-7' }
      ];
      const expected = '2018-07-17';
      testCorrectNextDate(expected, studies);
    });

    describe('box 2', () => {
      const studies = [
        { difficult: false, minutes: 25, date: '2018-07-9' },
        { difficult: true, minutes: 25, date: '2018-07-8' },
        { difficult: false, minutes: 25, date: '2018-07-7' }
      ];
      const expected = '2018-07-12';
      testCorrectNextDate(expected, studies);
    });

    describe('box 1', () => {
      const studies = [
        { difficult: true, minutes: 25, date: '2018-07-8' },
        { difficult: false, minutes: 25, date: '2018-07-7' }
      ];
      const expected = '2018-07-08';
      testCorrectNextDate(expected, studies);
    });
  });
});
