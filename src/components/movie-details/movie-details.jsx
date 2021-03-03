import React from 'react';
import {filmPropsValidation} from '../../props-validation';
import {formatRunTime} from '../../utils';

const MovieDetails = ({film}) => {
  const {director, starring, runTime, genre, released} = film;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value" style={{whiteSpace: `pre`}} >
            {Array.isArray(director) ? director.join(`, \n`) : director}
          </span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value" style={{whiteSpace: `pre`}}>
            {starring.join(`, \n`)}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{formatRunTime(runTime)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value" style={{whiteSpace: `pre`}} >
            {Array.isArray(genre) ? genre.join(`, \n`) : genre}
          </span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};


MovieDetails.propTypes = {
  film: filmPropsValidation.film,
};

export default MovieDetails;
