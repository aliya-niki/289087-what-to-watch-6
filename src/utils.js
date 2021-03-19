import {DEFAULT_ACTIVE_GENRE, SIMILAR_MOVIES_MAX_NUMBER, RatingLevels} from './const';

const MINUTES_IN_HOUR = 60;

export const formatRunTime = (timeInMinutes) => {
  const hours = Math.floor(timeInMinutes / MINUTES_IN_HOUR);
  const minutes = timeInMinutes - MINUTES_IN_HOUR * hours;
  return `${hours ? hours.toString() + `h` : ``} ${minutes ? minutes.toString() + `m` : ``}`;
};

export const getFilmRatingLevel = (rating) => {
  switch (true) {
    case (rating > 0 && rating <= 3):
      return RatingLevels.BAD;
    case (rating > 3 && rating <= 5):
      return RatingLevels.NORMAL;
    case (rating > 5 && rating <= 8):
      return RatingLevels.GOOD;
    case (rating > 8 && rating < 10):
      return RatingLevels.VERY_GOOD;
    case (rating === 10):
      return RatingLevels.AWESOME;
    default:
      return ``;
  }
};

export const filterByGenre = (films, currentGenre) => {
  return currentGenre === DEFAULT_ACTIVE_GENRE
    ? films
    : films.filter(({genre}) => {
      if (Array.isArray(genre)) {
        return genre.some((genreItem) => genreItem === currentGenre);
      }
      return genre === currentGenre;
    });
};

export const findSimilarFilms = (films, currentFilmId, currentFilmGenre) => {
  let similarFilms = [];

  if (Array.isArray(currentFilmGenre)) {
    currentFilmGenre.forEach((genre) => similarFilms.push(...filterByGenre(films, genre)));
  } else {
    similarFilms = filterByGenre(films, currentFilmGenre);
  }

  return similarFilms.filter(({id}) => id !== currentFilmId).slice(0, SIMILAR_MOVIES_MAX_NUMBER);
};

