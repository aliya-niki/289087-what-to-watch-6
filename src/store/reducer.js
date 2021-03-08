import {ActionType} from './action';
import {DEFAULT_ACTIVE_GENRE} from '../const';
import films from '../mocks/films';
import reviews from '../mocks/reviews';

const promo = films[0];

const initialState = {
  activeGenre: DEFAULT_ACTIVE_GENRE,
  filteredFilms: films,
  films,
  reviews,
  promo
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_GENRE:
      return {...state, activeGenre: action.payload};
    case ActionType.FILTER_FILMS_BY_GENRE:
      return {...state, filteredFilms: action.payload};
  }

  return state;
};

export {reducer};
