export const ActionType = {
  REDIRECT_TO_ROUTE: `middleware/redirectToRoute`,
};

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
