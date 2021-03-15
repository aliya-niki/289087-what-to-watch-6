import {getFilmsByGenre} from '../utils';

export const ActionType = {
  CHANGE_ACTIVE_GENRE: `films/changeActiveGenre`,
  FILTER_FILMS_BY_GENRE: `films/filterFilmsByGenre`,
  RESET_SHOWN_FILMS_NUMBER: `films/resetShownFilmsNumber`,
  INCREASE_SHOWN_FILMS_NUMBER: `films/increaseShownFilmsNumber`,
  REQUIRE_AUTHORIZATION: `user/requireAuthorization`,
  LOAD_FILMS: `data/loadFilms`,
  LOAD_PROMO: `data/loadPromo`,
  LOAD_COMMENTS: `data/loadComments`,
  REDIRECT_TO_ROUTE: `middlewares/redirectToRoute`,
  SET_USER_INFO: `user/setInfo`,
  SET_AUTHORIZATION_ERROR: `user/setAuthorizationError`,
  SET_REVIEW_POST_STATUS: `data/setReviewPostStatus`,
};

export const ActionCreator = {
  changeActiveGenre: (genre) => ({
    type: ActionType.CHANGE_ACTIVE_GENRE,
    payload: genre,
  }),
  filterFilmsByGenre: (films, genre) => {
    const filteredFilms = getFilmsByGenre(films, genre);

    return {
      type: ActionType.FILTER_FILMS_BY_GENRE,
      payload: filteredFilms
    };
  },
  resetShownFilmsNumber: () => ({
    type: ActionType.RESET_SHOWN_FILMS_NUMBER,
  }),
  increaseShownFilmsNumber: () => ({
    type: ActionType.INCREASE_SHOWN_FILMS_NUMBER,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  loadPromo: (promo) => ({
    type: ActionType.LOAD_PROMO,
    payload: promo,
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  setUserInfo: (userInfo) => ({
    type: ActionType.SET_USER_INFO,
    payload: userInfo,
  }),
  setAuthorizationError: (error) => ({
    type: ActionType.SET_AUTHORIZATION_ERROR,
    payload: error,
  }),
  setReviewPostStatus: (status) => ({
    type: ActionType.SET_REVIEW_POST_STATUS,
    payload: status,
  })
};
