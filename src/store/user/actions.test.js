import {
  setUserInfo,
  setAuthorizationError,
  ActionType
} from './actions';

const simpleMock = `test`;

describe(`Action creators work correctly`, () => {
  it(`Action creator for setting user info returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_USER_INFO,
      payload: simpleMock,
    };

    expect(setUserInfo(simpleMock)).toEqual(expectedAction);
  });

  it(`Action creator for setting authorization error returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_AUTHORIZATION_ERROR,
      payload: simpleMock,
    };

    expect(setAuthorizationError(simpleMock)).toEqual(expectedAction);
  });

});
