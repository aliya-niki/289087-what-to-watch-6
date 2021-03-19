import {loadFilms, loadPromo, setReviewPostStatus} from './actions';
import {redirectToRoute} from '../middlewares/actions';
import {ReviewPostStatus, APIRoute} from '../../const';
import {adaptDataToFilm} from '../../services/adapters';

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(loadFilms(data.map(adaptDataToFilm))))
);

export const fetchPromo = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => dispatch(loadPromo(adaptDataToFilm(data))))
);

export const sendReview = (id, rating, comment) => (dispatch, _getState, api) => {
  dispatch(setReviewPostStatus(ReviewPostStatus.LOADING));
  return api.post(`${APIRoute.COMMENTS}/${id}`, {comment, rating})
    .then(() => {
      dispatch(setReviewPostStatus(ReviewPostStatus.LOADED));
      dispatch(redirectToRoute(`${APIRoute.FILMS}/${id}`));
    })
    .catch(() => dispatch(setReviewPostStatus(ReviewPostStatus.ERROR)));
};
