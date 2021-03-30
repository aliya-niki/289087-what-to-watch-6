import {reducer, initialState} from './reducer';
import {ActionType} from './actions';

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {}))
      .toEqual(initialState);
  });

  it(`Reducer should update active genre with a given value`, () => {
    const mockGenre = `Drama`;

    expect(reducer(undefined, {
      type: ActionType.CHANGE_ACTIVE_GENRE,
      payload: mockGenre,
    }))
      .toEqual({
        activeGenre: mockGenre
      });
  });
});
