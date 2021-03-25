import {loadFilms, loadPromo, loadFavorites, setReviewPostStatus} from './actions';
import {redirectToRoute} from '../middlewares/actions';
import {ReviewPostStatus, APIRoute} from '../../const';
import {adaptDataToFilm} from '../../services/adapters';

const REVIEW_POST_STATUS_TIMEOUT = 5000;

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(loadFilms(data.map(adaptDataToFilm))))
);

export const fetchPromo = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => dispatch(loadPromo(adaptDataToFilm(data))))
);

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(loadFavorites(data.map(adaptDataToFilm))))
);

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

export const addToFavorite = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${Number(status)}`)
    .then(() => dispatch(fetchFavorites()))
);
