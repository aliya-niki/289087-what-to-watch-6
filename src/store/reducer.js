import {ActionType} from './action';
import {DEFAULT_ACTIVE_GENRE, MOVIES_NUMBER_PER_STEP, AuthorizationStatus, ReviewPostStatus} from '../const';
import reviews from '../mocks/reviews';
import {getFilmsByGenre} from '../utils';

const initialState = {
  activeGenre: DEFAULT_ACTIVE_GENRE,
  films: [],
  reviews,
  currentFilmComments: [],
  promo: {
    id: 0,
    name: ``,
    previewImage: ``,
    posterImage: ``,
    backgroundImage: ``,
    backgroundColor: ``,
    videoLink: ``,
    previewVideoLink: ``,
    description: ``,
    rating: 0,
    scoresCount: 0,
    director: ``,
    starring: [],
    runTime: 0,
    genre: ``,
    released: 0,
    isFavorite: false
  },
  filteredFilms: [],
  shownFilmsNumber: MOVIES_NUMBER_PER_STEP,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userAuthorizationInfo: {},
  authorizationError: false,
  isFilmsDataLoaded: false,
  reviewPostStatus: ReviewPostStatus.PENDING,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_GENRE:
      return {
        ...state,
        activeGenre: action.payload
      };
    case ActionType.FILTER_FILMS_BY_GENRE:
      return {
        ...state,
        filteredFilms: action.payload
      };
    case ActionType.RESET_SHOWN_FILMS_NUMBER:
      return {
        ...state,
        shownFilmsNumber: MOVIES_NUMBER_PER_STEP
      };
    case ActionType.INCREASE_SHOWN_FILMS_NUMBER:
      return {
        ...state,
        shownFilmsNumber: state.shownFilmsNumber + MOVIES_NUMBER_PER_STEP
      };
    case ActionType.REQUIRE_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.SET_USER_INFO:
      return {
        ...state,
        userAuthorizationInfo: action.payload,
      };
    case ActionType.SET_AUTHORIZATION_ERROR:
      return {
        ...state,
        authorizationError: action.payload,
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        filteredFilms: getFilmsByGenre(action.payload, state.activeGenre),
        isFilmsDataLoaded: true,
      };
    case ActionType.LOAD_PROMO:
      return {
        ...state,
        promo: action.payload,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        currentFilmComments: action.payload,
      };
    case ActionType.SET_REVIEW_POST_STATUS:
      return {
        ...state,
        reviewPostStatus: action.payload,
      };
  }

  return state;
};

export {reducer};
