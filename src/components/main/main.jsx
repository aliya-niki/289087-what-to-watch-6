import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import MoviesList from '../movies-list/movies-list';
import GenresList from '../genres-list/genres-list';
import ShowMore from '../show-more/show-more';
import Header from '../header/header';
import Footer from '../footer/footer';
import AddToFavorites from '../add-to-favorites/add-to-favorites';
import {getActiveGenre, getFilmsFilteredByGenre} from '../../store/app/selectors';
import {MOVIES_NUMBER_PER_STEP} from '../../const';
import {getPromo} from '../../store/data/selectors';

const Main = () => {
  const [shownFilmsNumber, setShownFilmsNumber] = useState(MOVIES_NUMBER_PER_STEP);

  const promo = useSelector(getPromo);
  const filteredFilms = useSelector(getFilmsFilteredByGenre);
  const activeGenre = useSelector(getActiveGenre);

  useEffect(() => {
    setShownFilmsNumber(MOVIES_NUMBER_PER_STEP);
  }, [activeGenre]);

  const history = useHistory();
  const handleOnPlayClick = () => {
    history.push(`/player/${id}`);
  };

  const handleShowMoreClick = () => {
    setShownFilmsNumber((prevState) => prevState + MOVIES_NUMBER_PER_STEP);
  };

  const {name, released, genre, backgroundImage, backgroundColor, posterImage, id} = promo;
  const filteredFilmsPerStep = filteredFilms.slice(0, shownFilmsNumber);

  return (
    <React.Fragment>
      <section className="movie-card" style={{background: backgroundColor}}>
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header additionalClassName={`movie-card__head`}/>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <Link to={`/films/${id}`}>
              <div className="movie-card__poster">
                <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
              </div>
            </Link>

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
          {shownFilmsNumber < filteredFilms.length
            ? <ShowMore onShowMoreClick={handleShowMoreClick}/>
            : ``}
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Main;
