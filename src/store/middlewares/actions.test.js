import {ActionType, redirectToRoute} from './actions';

const simpleMock = `test`;

it(`RedirectToRoute action creator returns correct action`, () => {
  const expectedAction = {
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: simpleMock
  };

  expect(redirectToRoute(simpleMock)).toEqual(expectedAction);
});

