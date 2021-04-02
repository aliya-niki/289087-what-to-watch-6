import {setReviewPostStatus, ActionType} from './actions';

const simpleMock = `test`;

it(`Action creator for setting review status returns correct action`, () => {
  const expectedAction = {
    type: ActionType.SET_REVIEW_POST_STATUS,
    payload: simpleMock,
  };

  expect(setReviewPostStatus(simpleMock)).toEqual(expectedAction);
});
