import {ActionType} from './actions';

export const initialState = {
  favorites: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
  }
  return state;
};

