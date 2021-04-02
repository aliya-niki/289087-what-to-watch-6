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
      isServerError: false,
    }, {
      type: ActionType.LOAD_FILMS,
      payload: filmsAdapted,
    }))
      .toEqual({
        films: filmsAdapted,
        promo: null,
        isServerError: false,
      });
  });

  it(`Reducer should update promo by loading promo`, () => {
    expect(reducer({
      films: [],
      promo: null,
      isServerError: false,
    }, {
      type: ActionType.LOAD_PROMO,
      payload: promo,
    }))
      .toEqual({
        films: [],
        promo,
        isServerError: false,
      });
  });

  it(`Reducer should update isServerError correctly`, () => {
    expect(reducer({
      films: [],
      promo: null,
      isServerError: false,
    }, {
      type: ActionType.SET_SERVER_ERROR,
      payload: true,
    }))
      .toEqual({
        films: [],
        promo: null,
        isServerError: true,
      });
  });
});
