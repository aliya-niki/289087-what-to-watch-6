import {createSelector} from 'reselect';
import {NameSpace} from '../reducer';
import {GENRES_MAX_NUMBER, DEFAULT_ACTIVE_GENRE} from '../../const';
import {findSimilarFilms} from '../../utils';

const getFilmId = (_state, id) => id;

export const getFilms = (state) => state[NameSpace.DATA].films;
export const getPromo = (state) => state[NameSpace.DATA].promo;
export const getReviewPostStatus = (state) => state[NameSpace.DATA].reviewPostStatus;
export const getIsDataLoaded = (state) => !!state[NameSpace.DATA].films.length && !!state[NameSpace.DATA].promo;

export const getGenres = createSelector(
    getFilms,
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

export const getFilmById = createSelector(
    [getFilms, getFilmId],
    (films, id) => {
      if (Array.isArray(films)) {
        return films.find((film) => film.id === +id);
      }
      return ``;
    }
);

export const getSimilarFilms = createSelector(
    [getFilms, getFilmById],
    (films, film) => {
      return findSimilarFilms(films, film.id, film.genre);
    }
);
