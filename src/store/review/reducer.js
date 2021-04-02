import {ActionType} from './actions';
import {ReviewPostStatus} from '../../const';

export const initialState = {
  reviewPostStatus: ReviewPostStatus.PENDING,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_REVIEW_POST_STATUS:
      return {
        ...state,
        reviewPostStatus: action.payload,
      };
  }
  return state;
};

