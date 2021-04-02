import {loadFilms, loadPromo, setServerError} from './actions';
import {APIRoute} from '../../const';
import {adaptDataToFilm} from '../../services/adapters';


export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(loadFilms(data.map(adaptDataToFilm))))
    .catch(() => dispatch(setServerError(true)))
);

export const fetchPromo = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => dispatch(loadPromo(adaptDataToFilm(data))))
);
