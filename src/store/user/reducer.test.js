import {reducer, initialState} from './reducer';
import {ActionType} from './actions';
import {authAdapted} from '../../tests-mocks';

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {}))
      .toEqual(initialState);
  });

  it(`Reducer should set authorization error`, () => {
    expect(reducer(undefined, {
      type: ActionType.SET_AUTHORIZATION_ERROR,
      payload: true,
    }))
      .toEqual({
        ...initialState,
        authorizationError: true,
      });
  });

  it(`Reducer should update authorization info`, () => {
    expect(reducer(undefined, {
      type: ActionType.SET_USER_INFO,
      payload: authAdapted,
    }))
      .toEqual({
        ...initialState,
        userAuthorizationInfo: authAdapted,
      });
  });
});
