export const ActionType = {
  SET_USER_INFO: `user/setInfo`,
  SET_AUTHORIZATION_ERROR: `user/setAuthorizationError`,
};

export const setUserInfo = (userInfo) => ({
  type: ActionType.SET_USER_INFO,
  payload: userInfo,
});

export const setAuthorizationError = (error) => ({
  type: ActionType.SET_AUTHORIZATION_ERROR,
  payload: error,
});
