import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {filmPropsValidation} from '../../props-validation';
import MovieCard from '../movie-card/movie-card';

const MoviesList = ({films}) => {
  const [activeCardId, setActiveCardId] = useState(null);

  return (
    <div className="catalog__movies-list">
      {films.map((film) => {
        const isActive = film.id === activeCardId ? true : false;
        return <MovieCard film={film}
          key={film.id}
          onHover={setActiveCardId}
          isActive={isActive} />;
      })}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(filmPropsValidation.film).isRequired
};

export default MoviesList;
