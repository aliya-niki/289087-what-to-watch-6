import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MoviesList from '../movies-list/movies-list';
import Header from '../header/header';
import Footer from '../footer/footer';
import {getFavorites} from '../../store/data/selectors';
import {logout} from '../../store/user/operations';
import {fetchFavorites} from '../../store/data/operations';

const MyList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());

    return () => {
      dispatch(logout());
    };
  }, []);

  const myListFilms = useSelector(getFavorites);

  return (
    <div className="user-page">
      <Header additionalClassName={`user-page__head`}>
        <h1 className="page-title user-page__title">My list</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MoviesList films={myListFilms} />
      </section>

      <Footer />
    </div>
  );
};

export default MyList;
