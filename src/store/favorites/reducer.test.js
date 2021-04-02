import {reducer, initialState} from './reducer';
import {filmsAdapted} from '../../tests-mocks';
import {ActionType} from './actions';

describe(`Reducer should work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {}))
      .toEqual(initialState);
  });

  it(`Reducer should update favorites by loading favorite films`, () => {
    expect(reducer({
      favorites: [],
    }, {
      type: ActionType.LOAD_FAVORITES,
      payload: filmsAdapted,
    }))
      .toEqual({
        favorites: filmsAdapted,
      });
  });
});
