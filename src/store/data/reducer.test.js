import {ReviewPostStatus} from '../../const';
import {reducer, initialState} from './reducer';
import {filmsAdapted} from '../../tests-mocks';
import {ActionType} from './actions';

const [promo] = filmsAdapted;

describe(`Reducer should work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {}))
      .toEqual(initialState);
  });

  it(`Reducer should update films by loading films`, () => {
    expect(reducer({
      films: [],
      promo: null,
      favorites: [],
      reviewPostStatus: ReviewPostStatus.PENDING,
    }, {
      type: ActionType.LOAD_FILMS,
      payload: filmsAdapted,
    }))
      .toEqual({
        films: filmsAdapted,
        promo: null,
        favorites: [],
        reviewPostStatus: ReviewPostStatus.PENDING,
      });
  });

  it(`Reducer should update promo by loading promo`, () => {
    expect(reducer({
      films: [],
      promo: null,
      favorites: [],
      reviewPostStatus: ReviewPostStatus.PENDING,
    }, {
      type: ActionType.LOAD_PROMO,
      payload: promo,
    }))
      .toEqual({
        films: [],
        promo,
        favorites: [],
        reviewPostStatus: ReviewPostStatus.PENDING,
      });
  });

  it(`Reducer should update favorites by loading favorite films`, () => {
    expect(reducer({
      films: [],
      promo: null,
      favorites: [],
      reviewPostStatus: ReviewPostStatus.PENDING,
    }, {
      type: ActionType.LOAD_FAVORITES,
      payload: filmsAdapted,
    }))
      .toEqual({
        films: [],
        promo: null,
        favorites: filmsAdapted,
        reviewPostStatus: ReviewPostStatus.PENDING,
      });
  });

  it(`Reducer should update reviewPostStatus correctly`, () => {
    expect(reducer({
      films: [],
      promo: null,
      favorites: [],
      reviewPostStatus: ReviewPostStatus.PENDING,
    }, {
      type: ActionType.SET_REVIEW_POST_STATUS,
      payload: ReviewPostStatus.LOADED,
    }))
      .toEqual({
        films: [],
        promo: null,
        favorites: [],
        reviewPostStatus: ReviewPostStatus.LOADED,
      });
  });

  it(`Reducer should update isServerError correctly`, () => {
    expect(reducer({
      films: [],
      promo: null,
      favorites: [],
      reviewPostStatus: ReviewPostStatus.PENDING,
      isServerError: false,
    }, {
      type: ActionType.SET_SERVER_ERROR,
      payload: true,
    }))
      .toEqual({
        films: [],
        promo: null,
        favorites: [],
        reviewPostStatus: ReviewPostStatus.PENDING,
        isServerError: true,
      });
  });
});
