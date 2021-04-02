import {setReviewPostStatus} from './actions';
import {redirectToRoute} from '../middlewares/actions';
import {ReviewPostStatus, APIRoute} from '../../const';

const REVIEW_POST_STATUS_TIMEOUT = 5000;

export const sendReview = (id, rating, comment) => (dispatch, _getState, api) => {
  dispatch(setReviewPostStatus(ReviewPostStatus.LOADING));
  return api.post(`${APIRoute.COMMENTS}/${id}`, {comment, rating})
    .then(() => {
      dispatch(setReviewPostStatus(ReviewPostStatus.LOADED));
      dispatch(redirectToRoute(`${APIRoute.FILMS}/${id}`));
    })
    .catch(() => dispatch(setReviewPostStatus(ReviewPostStatus.ERROR)))
    .finally(() => {
      setTimeout(() => dispatch(setReviewPostStatus(ReviewPostStatus.PENDING)), REVIEW_POST_STATUS_TIMEOUT);
    });
};

