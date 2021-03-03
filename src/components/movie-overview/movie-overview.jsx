import React from 'react';
import {filmPropsValidation} from '../../props-validation';
import {getFilmRatingLevel} from '../../utils';

const MovieOverview = ({film}) => {
  const {rating, scoresCount, director, starring, description} = film;

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getFilmRatingLevel(rating)}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {Array.isArray(director) ? director.join(`, `) : director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)} and other</strong></p>
      </div>
    </React.Fragment>

  );
};

MovieOverview.propTypes = {
  film: filmPropsValidation.film,
};

export default MovieOverview;
