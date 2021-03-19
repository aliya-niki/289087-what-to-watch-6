export const ActionType = {
  CHANGE_ACTIVE_GENRE: `app/changeActiveGenre`,
};

export const changeActiveGenre = (genre) => ({
  type: ActionType.CHANGE_ACTIVE_GENRE,
  payload: genre,
});
