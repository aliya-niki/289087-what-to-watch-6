import React, {useState, useEffect, memo} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {filmPropsValidation} from '../../props-validation';
import PreviewPlayer from '../preview-player/preview-player';

const PREVIEW_PLAYER_TIMEOUT = 1000;

const MovieCard = ({film, onHover, isActive}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const {name, previewImage, id, previewVideoLink} = film;

  const handleOnCardMouseHover = () => {
    onHover(id);
  };

  const handleOnCardMouseLeave = () => {
    onHover(null);
  };

  useEffect(() => {
    const previewPlayerTimeout = setTimeout(() => {
      if (isActive) {
        setIsPlaying(true);
      }
    }, PREVIEW_PLAYER_TIMEOUT);

    return () => {
      clearTimeout(previewPlayerTimeout);
    };
  }, [isActive]);

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={handleOnCardMouseHover}
      onMouseLeave={handleOnCardMouseLeave} >
      <Link to={`/films/${id}`} className="small-movie-card__link">
        <div className="small-movie-card__image">
          { isActive
            ? <PreviewPlayer poster={previewImage} src={previewVideoLink} isPlaying={isPlaying}/>
            : <img src={previewImage} alt={name} width="280" height="175" />
          }
        </div>
        <h3 className="small-movie-card__title">{name}</h3>
      </Link>
    </article>

  );
};

MovieCard.propTypes = {
  ...filmPropsValidation,
  onHover: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default memo(MovieCard);
