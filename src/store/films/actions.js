export const ActionType = {
  LOAD_FILMS: `films/loadFilms`,
  LOAD_PROMO: `films/loadPromo`,
  SET_SERVER_ERROR: `films/setServerError`,
};

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

export const loadPromo = (promo) => ({
  type: ActionType.LOAD_PROMO,
  payload: promo,
});

export const setServerError = (status) => ({
  type: ActionType.SET_SERVER_ERROR,
  payload: status,
});
