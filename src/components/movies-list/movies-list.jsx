import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {filmPropsValidation} from '../../props-validation';
import MovieCard from '../movie-card/movie-card';

const MoviesList = ({films}) => {
  const [, setActiveMovieId] = useState(null);

  return (
    <div className="catalog__movies-list">
      {films.map((film) => (<MovieCard film={film} key={film.id} onHover={setActiveMovieId}/>))}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(filmPropsValidation.film).isRequired
};

export default MoviesList;
