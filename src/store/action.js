import {getFilmsByGenre} from '../utils';

export const ActionType = {
  CHANGE_ACTIVE_GENRE: `films/changeActiveGenre`,
  FILTER_FILMS_BY_GENRE: `films/filterFilmsByGenre`,
  RESET_SHOWN_FILMS_NUMBER: `films/resetShownFilmsNumber`,
  INCREASE_SHOWN_FILMS_NUMBER: `films/increaseShownFilmsNumber`,
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
  })
};
