import {ActionType} from './actions';

const initialState = {
  userAuthorizationInfo: null,
  authorizationError: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
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
  }
  return state;
};
