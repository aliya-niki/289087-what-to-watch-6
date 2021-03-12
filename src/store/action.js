import {getFilmsByGenre} from '../utils';

export const ActionType = {
  CHANGE_ACTIVE_GENRE: `films/changeActiveGenre`,
  FILTER_FILMS_BY_GENRE: `films/filterFilmsByGenre`,
  RESET_SHOWN_FILMS_NUMBER: `films/resetShownFilmsNumber`,
  INCREASE_SHOWN_FILMS_NUMBER: `films/increaseShownFilmsNumber`,
  REQUIRE_AUTHORIZATION: `user/requireAuthorization`,
  LOAD_FILMS: `films/loadFilms`,
  LOAD_PROMO: `films/loadPromo`
};

export const ActionCreator = {
  changeActiveGenre: (genre) => ({
    type: ActionType.CHANGE_ACTIVE_GENRE,
    payload: genre,
  }),
  filterFilmsByGenre: (films, genre) => {
    const filteredFilms = getFilmsByGenre(films, genre);

    return {
      type: ActionType.FILTER_FILMS_BY_GENRE,
      payload: filteredFilms
    };
  },
  resetShownFilmsNumber: () => ({
    type: ActionType.RESET_SHOWN_FILMS_NUMBER,
  }),
  increaseShownFilmsNumber: () => ({
    type: ActionType.INCREASE_SHOWN_FILMS_NUMBER,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  loadPromo: (promo) => ({
    type: ActionType.LOAD_PROMO,
    payload: promo,
  })
};
