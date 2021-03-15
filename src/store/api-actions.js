import {ActionCreator} from './action';
import {AuthorizationStatus, ReviewPostStatus, AppRoute, APIRoute} from '../const';
import {adaptDataToFilm, adaptDataToUserInfo} from '../services/adapters';

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data.map(adaptDataToFilm))))
);

export const fetchPromo = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => dispatch(ActionCreator.loadPromo(adaptDataToFilm(data))))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadComments(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(ActionCreator.setUserInfo(adaptDataToUserInfo(data))))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(ActionCreator.setUserInfo(adaptDataToUserInfo(data))))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.setAuthorizationError(false)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
    .catch(() => dispatch(ActionCreator.setAuthorizationError(true)))
);

export const sendReview = (id, rating, comment) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setReviewPostStatus(ReviewPostStatus.LOADING));
  return api.post(`${APIRoute.COMMENTS}/${id}`, {comment, rating})
    .then(() => dispatch(ActionCreator.setReviewPostStatus(ReviewPostStatus.LOADED)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`${APIRoute.FILMS}/${id}`)))
    .catch(() => dispatch(ActionCreator.setReviewPostStatus(ReviewPostStatus.ERROR)));
};
