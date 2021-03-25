import React from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getIsAuthorized} from '../../store/user/selectors';
import {getFilmById, getSimilarFilms} from '../../store/data/selectors';

import MoviesList from '../movies-list/movies-list';
import NotFoundPage from '../not-found-page/not-found-page';
import Tabs from '../tabs/tabs';
import Header from '../header/header';
import Footer from '../footer/footer';
import AddToFavorites from '../add-to-favorites/add-to-favorites';

const Film = () => {
  const {id} = useParams();

  const film = useSelector((state) => getFilmById(state, id));
  const similarFilms = useSelector((state) => getSimilarFilms(state, id));
  const isAuthorized = useSelector((state) => getIsAuthorized(state));

  const history = useHistory();
  const handleOnPlayClick = () => history.push(`/player/${id}`);

  if (!film) {
    return <NotFoundPage />;
  }

  const {name, backgroundImage, backgroundColor, posterImage, genre, released} = film;

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full" style={{background: backgroundColor}}>
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
                <AddToFavorites id={Number(id)}/>
                { isAuthorized &&
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
            <Tabs film={film}/>
          </div>
        </div>
      </section>
      <div className="page-content">
        { similarFilms.length
          ? <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <MoviesList films={similarFilms} />
          </section>
          : ``}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Film;
