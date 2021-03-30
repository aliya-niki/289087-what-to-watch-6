export const ActionType = {
  LOAD_FILMS: `data/loadFilms`,
  LOAD_PROMO: `data/loadPromo`,
  LOAD_FAVORITES: `data/loadFavorites`,
  SET_REVIEW_POST_STATUS: `data/setReviewPostStatus`,
  SET_SERVER_ERROR: `data/setServerError`,
};

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

export const loadPromo = (promo) => ({
  type: ActionType.LOAD_PROMO,
  payload: promo,
});

export const loadFavorites = (films) => ({
  type: ActionType.LOAD_FAVORITES,
  payload: films,
});

export const setReviewPostStatus = (status) => ({
  type: ActionType.SET_REVIEW_POST_STATUS,
  payload: status,
});

export const setServerError = (status) => ({
  type: ActionType.SET_SERVER_ERROR,
  payload: status,
});
