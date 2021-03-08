import {ActionType} from './action';
import {DEFAULT_ACTIVE_GENRE, MOVIES_NUMBER_PER_STEP} from '../const';
import films from '../mocks/films';
import reviews from '../mocks/reviews';

const promo = films[0];

const initialState = {
  activeGenre: DEFAULT_ACTIVE_GENRE,
  filteredFilms: films,
  films,
  reviews,
  promo,
  shownFilmsNumber: MOVIES_NUMBER_PER_STEP
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_GENRE:
      return {...state, activeGenre: action.payload};
    case ActionType.FILTER_FILMS_BY_GENRE:
      return {...state, filteredFilms: action.payload};
    case ActionType.RESET_SHOWN_FILMS_NUMBER:
      return {...state, shownFilmsNumber: MOVIES_NUMBER_PER_STEP};
    case ActionType.INCREASE_SHOWN_FILMS_NUMBER:
      return {...state, shownFilmsNumber: state.shownFilmsNumber + MOVIES_NUMBER_PER_STEP};
  }

  return state;
};

export {reducer};
