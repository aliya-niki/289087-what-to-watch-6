import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {filmPropsValidation} from '../../props-validation';
import MovieCard from '../movie-card/movie-card';

const MoviesList = ({films}) => {
  const [activeCardId, setActiveCardId] = useState(null);

  const handleOnHover = useCallback((id) => {
    setActiveCardId(id);
  }, []);

  return (
    <div className="catalog__movies-list">
      {films.map((film) => {
        const isActive = film.id === activeCardId ? true : false;
        return <MovieCard film={film}
          key={film.id}
          onHover={handleOnHover}
          isActive={isActive} />;
      })}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(filmPropsValidation.film).isRequired
};

export default MoviesList;
