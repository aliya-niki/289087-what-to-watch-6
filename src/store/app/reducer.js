import {ActionType} from './actions';
import {DEFAULT_ACTIVE_GENRE} from '../../const';

const initialState = {
  activeGenre: DEFAULT_ACTIVE_GENRE,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_GENRE:
      return {
        ...state,
        activeGenre: action.payload
      };
  }
  return state;
};
