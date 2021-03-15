import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link, useHistory, useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {filmPropsValidation, reviewPropsValidation} from '../../props-validation';
import {getSimilarFilms} from '../../utils';
import MoviesList from '../movies-list/movies-list';
import NotFoundPage from '../not-found-page/not-found-page';
import Tabs from '../tabs/tabs';
import Header from '../header/header';
import Footer from '../footer/footer';
import {AppRoute, AuthorizationStatus} from '../../const';
import {fetchComments} from '../../store/api-actions';

const Film = ({films, reviews, onComponentMount, authorizationStatus}) => {
  const paramsId = parseInt(useParams().id, 10);
  const film = films.find(({id}) => paramsId === id);

  if (!film) {
    return <NotFoundPage />;
  }

  useEffect(() => {
    onComponentMount(paramsId);
  }, [paramsId]);

  const {name, backgroundImage, posterImage, genre, released, id} = film;

  const similarFilms = getSimilarFilms(films, id, genre);

  const history = useHistory();
  const handleOnPlayClick = () => history.push(`/player/${id}`);
  const handleOnMyListClick = () => history.push(AppRoute.MY_LIST);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header additionalClassName={`movie-card__head`}/>

          <div className="movie-card__wrap">
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
                { authorizationStatus === AuthorizationStatus.AUTH &&
                  <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
            </div>

            <Tabs film={film} reviews={reviews} />
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MoviesList films={similarFilms} />
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

Film.propTypes = {
  films: PropTypes.arrayOf(filmPropsValidation.film).isRequired,
  reviews: PropTypes.arrayOf(reviewPropsValidation.review).isRequired,
  onComponentMount: PropTypes.func,
  authorizationStatus: PropTypes.oneOf([...Object.values(AuthorizationStatus)]),
};

const mapStateToProps = (state) => ({
  films: state.films,
  reviews: state.currentFilmComments,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onComponentMount(id) {
    dispatch(fetchComments(id));
  }
});

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);
