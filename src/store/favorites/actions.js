export const ActionType = {
  LOAD_FAVORITES: `favorites/loadFavorites`,
};

export const loadFavorites = (films) => ({
  type: ActionType.LOAD_FAVORITES,
  payload: films,
});
