export const ActionType = {
  LOAD_FILMS: `data/loadFilms`,
  LOAD_PROMO: `data/loadPromo`,
  SET_REVIEW_POST_STATUS: `data/setReviewPostStatus`,
};

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

export const loadPromo = (promo) => ({
  type: ActionType.LOAD_PROMO,
  payload: promo,
});

export const setReviewPostStatus = (status) => ({
  type: ActionType.SET_REVIEW_POST_STATUS,
  payload: status,
});
