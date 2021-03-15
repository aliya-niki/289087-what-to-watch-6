import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {useHistory} from 'react-router-dom';
import {filmPropsValidation} from '../../props-validation';
import MoviesList from '../movies-list/movies-list';
import GenresList from '../genres-list/genres-list';
import ShowMore from '../show-more/show-more';
import Header from '../header/header';
import Footer from '../footer/footer';

const Main = ({promo, filteredFilms, shownFilmsNumber, onPageChange}) => {
  const {name, released, genre, backgroundImage, posterImage, id} = promo;

  const filteredFilmsPerStep = filteredFilms.slice(0, shownFilmsNumber);

  const history = useHistory();
  const handleOnPlayClick = () => {
    history.push(`/player/${id}`);
    onPageChange();
  };
  const handleOnMyListClick = () => {
    history.push(`/mylist`);
    onPageChange();
  };

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header additionalClassName={`movie-card__head`}/>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={handleOnPlayClick}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button" onClick={handleOnMyListClick}>
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />

          <MoviesList films={filteredFilmsPerStep} />

          {shownFilmsNumber < filteredFilms.length ? <ShowMore /> : ``}
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};


Main.propTypes = {
  promo: filmPropsValidation.film,
  filteredFilms: PropTypes.arrayOf(filmPropsValidation.film).isRequired,
  shownFilmsNumber: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filteredFilms: state.filteredFilms,
  promo: state.promo,
  shownFilmsNumber: state.shownFilmsNumber,
});

const mapDispatchToProps = (dispatch) => ({
  onPageChange() {
    dispatch(ActionCreator.resetShownFilmsNumber());
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
