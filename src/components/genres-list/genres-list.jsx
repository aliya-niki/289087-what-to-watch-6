import React from 'react';
import PropTypes from 'prop-types';
import {connect, useSelector} from 'react-redux';
import {changeActiveGenre} from '../../store/app/actions';
import {getActiveGenre} from '../../store/app/selectors';
import {getGenres} from '../../store/data/selectors';

const GenresList = ({onGenreChange}) => {
  const activeGenre = useSelector(getActiveGenre);
  const genres = useSelector(getGenres);

  const handleActiveGenreChange = (evt) => {
    evt.preventDefault();
    const genre = evt.target.textContent;

    if (genre !== activeGenre) {
      onGenreChange(genre);
    }
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => <li key={genre} className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`}>
        <a href="#" className="catalog__genres-link" onClick={handleActiveGenreChange}>{genre}</a>
      </li>
      )}
    </ul>
  );
};

GenresList.propTypes = {
  onGenreChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onGenreChange: changeActiveGenre,
};

export {GenresList};
export default connect(null, mapDispatchToProps)(GenresList);
