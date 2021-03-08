import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {filmPropsValidation} from '../../props-validation';
import {getFilmsGenres} from '../../utils';

const GenresList = ({films, activeGenre, onGenreChange}) => {
  const genres = getFilmsGenres(films);

  const handleActiveGenreChange = (evt) => {
    evt.preventDefault();
    const genre = evt.target.textContent;

    if (genre !== activeGenre) {
      onGenreChange(films, genre);
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
  films: PropTypes.arrayOf(filmPropsValidation.film).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
  activeGenre: state.activeGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(films, genre) {
    dispatch(ActionCreator.changeActiveGenre(genre));
    dispatch(ActionCreator.filterFilmsByGenre(films, genre));
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
