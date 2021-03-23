import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import AddReviewForm from '../add-review-form/add-review-form';
import NotFoundPage from '../not-found-page/not-found-page';
import Header from '../header/header';
import {getFilmById} from '../../store/data/selectors';
import {logout} from '../../store/user/operations';

const AddReview = () => {
  const {id} = useParams();

  const film = useSelector((state) => getFilmById(state, id));

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(logout());
    };
  }, []);

  if (!film) {
    return <NotFoundPage />;
  }

  const {name, backgroundImage, backgroundColor, posterImage} = film;

  return (
    <section className="movie-card movie-card--full" style={{background: backgroundColor}}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
        </div>
      </div>
      <div className="add-review">
        <AddReviewForm />
      </div>
    </section>
  );
};

export default AddReview;
