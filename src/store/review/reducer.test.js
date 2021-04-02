import {ReviewPostStatus} from '../../const';
import {reducer, initialState} from './reducer';
import {ActionType} from './actions';

describe(`Reducer should work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {}))
      .toEqual(initialState);
  });

  it(`Reducer should update reviewPostStatus correctly`, () => {
    expect(reducer({
      reviewPostStatus: ReviewPostStatus.PENDING,
    }, {
      type: ActionType.SET_REVIEW_POST_STATUS,
      payload: ReviewPostStatus.LOADED,
    }))
      .toEqual({
        reviewPostStatus: ReviewPostStatus.LOADED,
      });
  });
});
