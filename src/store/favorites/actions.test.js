import {loadFavorites, ActionType} from './actions';

const simpleMock = `test`;

it(`Action creator for loading favorite films returns correct action`, () => {
  const expectedAction = {
    type: ActionType.LOAD_FAVORITES,
    payload: simpleMock,
  };

  expect(loadFavorites(simpleMock)).toEqual(expectedAction);
});

