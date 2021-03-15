export const DEFAULT_ACTIVE_GENRE = `All genres`;
export const SIMILAR_MOVIES_MAX_NUMBER = 4;
export const GENRES_MAX_NUMBER = 10;
export const MOVIES_NUMBER_PER_STEP = 8;

export const RatingLevels = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const ReviewPostStatus = {
  LOADING: `LOADING`,
  LOADED: `LOADED`,
  ERROR: `ERROR`,
  PENDING: `PENDING`,
};

export const AppRoute = {
  LOGIN: `/login`,
  FILM: `/films/:id`,
  REVIEW: `/films/:id/review`,
  PLAYER: `/player/:id`,
  MAIN: `/`,
  MY_LIST: `/mylist`,
};

export const APIRoute = {
  FILMS: `/films`,
  LOGIN: `/login`,
  PROMO: `/films/promo`,
  COMMENTS: `/comments`,
};
