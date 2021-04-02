export const ActionType = {
  SET_REVIEW_POST_STATUS: `review/setReviewPostStatus`,
};

export const setReviewPostStatus = (status) => ({
  type: ActionType.SET_REVIEW_POST_STATUS,
  payload: status,
});
