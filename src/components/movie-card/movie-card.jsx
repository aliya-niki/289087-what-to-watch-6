import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {filmPropsValidation} from '../../props-validation';

const MovieCard = ({film, onHover}) => {
  const {name, previewImage, id} = film;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={() => onHover(id)} >
      <div className="small-movie-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link to="/films/:id" className="small-movie-card__link">{name}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  ...filmPropsValidation,
  onHover: PropTypes.func.isRequired,
};

export default MovieCard;
