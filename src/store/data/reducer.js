import {ActionType} from './actions';
import {ReviewPostStatus} from '../../const';

const initialState = {
  films: [],
  promo: null,
  favorites: [],
  reviewPostStatus: ReviewPostStatus.PENDING,
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
    case ActionType.LOAD_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    case ActionType.SET_REVIEW_POST_STATUS:
      return {
        ...state,
        reviewPostStatus: action.payload,
      };
  }
  return state;
};

