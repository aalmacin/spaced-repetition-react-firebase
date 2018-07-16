import * as R from 'ramda';
import moment from 'moment';

const determineBox = studies =>
  R.pipe(
    R.takeWhile(R.propEq('difficult', false)),
    R.length,
    R.inc,
    R.clamp(1, 5)
  )(studies);

const setDate = (box, date) =>
  moment(date)
    .add(R.nth(box - 1, [0, 3, 7, 14, 30]), 'days')
    .format('YYYY-MM-DD');

export const getNextStudy = R.curry(studies =>
  R.pipe(
    R.assoc('studies', R.__, R.identity),
    r =>
      R.assoc(
        'latest_date',
        R.pipe(
          R.head,
          R.prop('date')
        )(R.prop('studies', r)),
        r
      ),
    r => R.assoc('box', determineBox(R.prop('studies', r)), r),
    r =>
      R.assoc(
        'next_date',
        setDate(R.prop('box', r), R.prop('latest_date', r)),
        r
      )
  )(studies)
);
