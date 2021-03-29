import {
  changeActiveGenre,
  ActionType
} from './actions';

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing active genre returns correct action`, () => {
    const mockGenre = `Drama`;

    const expectedAction = {
      type: ActionType.CHANGE_ACTIVE_GENRE,
      payload: mockGenre,
    };

    expect(changeActiveGenre(mockGenre)).toEqual(expectedAction);
  });
});
