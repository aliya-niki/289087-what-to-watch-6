import {createSelector} from 'reselect';
import get from 'lodash/get';
import {NameSpace} from '../reducer';
import {GENRES_MAX_NUMBER, DEFAULT_ACTIVE_GENRE, ReviewPostStatus} from '../../const';
import {findSimilarFilms} from '../../utils';

const getFilmIdSelector = (_state, id) => id;

export const getFilmsSelector = (state) => get(state, `${NameSpace.DATA}.films`, []);

export const getPromoSelector = (state) => get(state, `${NameSpace.DATA}.promo`, null);

export const getIsDataLoadedSelector = (state) => !!getPromoSelector(state) && !!getFilmsSelector(state).length;

export const getFavoritesSelector = (state) => get(state, `${NameSpace.DATA}.favorites`, []);

export const getReviewPostStatusSelector = (state) => get(state, `${NameSpace.DATA}.reviewPostStatus`, ReviewPostStatus.PENDING);

export const getIsServerErrorSelector = (state) => get(state, `${NameSpace.DATA}.isServerError`, false);

export const getGenresSelector = createSelector(
    getFilmsSelector,
    (films) => {
      const genres = new Set();
      films.forEach(({genre}) => {
        if (Array.isArray(genre)) {
          genre.forEach((genreItem) => genres.add(genreItem));
          return;
        }
        genres.add(genre);
      });
      return [DEFAULT_ACTIVE_GENRE, ...genres].slice(0, GENRES_MAX_NUMBER);
    }
);

export const getFilmByIdSelector = createSelector(
    [getFilmsSelector, getFilmIdSelector],
    (films, id) => {
      if (Array.isArray(films)) {
        return films.find((film) => film.id === +id);
      }
      return ``;
    }
);

export const getSimilarFilmsSelector = createSelector(
    [getFilmsSelector, getFilmByIdSelector],
    (films, film) => {
      return findSimilarFilms(films, film.id, film.genre);
    }
);
