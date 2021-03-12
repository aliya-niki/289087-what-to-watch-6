import {ActionCreator} from './action';
import {AuthorizationStatus} from '../const';
import {adaptDataToFilm} from '../services/adapters';

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data.map(adaptDataToFilm))))
);

export const fetchPromo = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => dispatch(ActionCreator.loadPromo(adaptDataToFilm(data))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);
