import {ActionType} from './actions';

export const initialState = {
  films: [],
  promo: null,
  isServerError: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
      };
    case ActionType.LOAD_PROMO:
      return {
        ...state,
        promo: action.payload,
      };
    case ActionType.SET_SERVER_ERROR:
      return {
        ...state,
        isServerError: action.payload,
      };
  }
  return state;
};

