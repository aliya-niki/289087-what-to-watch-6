import {loadFavorites} from './actions';
import {APIRoute} from '../../const';
import {adaptDataToFilm} from '../../services/adapters';

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(loadFavorites(data.map(adaptDataToFilm))))
);

export const addToFavorite = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${Number(status)}`)
    .then(() => dispatch(fetchFavorites()))
);
