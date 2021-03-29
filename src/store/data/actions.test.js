import {
  loadFilms,
  loadPromo,
  loadFavorites,
  setReviewPostStatus,
  ActionType
} from './actions';

const simpleMock = `test`;

describe(`Action creators work correctly`, () => {
  it(`Action creator for loading films returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_FILMS,
      payload: simpleMock,
    };

    expect(loadFilms(simpleMock)).toEqual(expectedAction);
  });

  it(`Action creator for loading promo returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_PROMO,
      payload: simpleMock,
    };

    expect(loadPromo(simpleMock)).toEqual(expectedAction);
  });

  it(`Action creator for loading favorite films returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: simpleMock,
    };

    expect(loadFavorites(simpleMock)).toEqual(expectedAction);
  });

  it(`Action creator for setting review status returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_REVIEW_POST_STATUS,
      payload: simpleMock,
    };

    expect(setReviewPostStatus(simpleMock)).toEqual(expectedAction);
  });

});
