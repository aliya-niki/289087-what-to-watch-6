import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect, useSelector} from 'react-redux';
import MoviesList from '../movies-list/movies-list';
import Header from '../header/header';
import Footer from '../footer/footer';
import {getFavoritesSelector} from '../../store/data/selectors';
import {fetchFavorites} from '../../store/data/operations';

const MyList = ({onFetchFavorites}) => {
  useEffect(() => {
    onFetchFavorites();
  }, []);

  const myListFilms = useSelector(getFavoritesSelector);

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

MyList.propTypes = {
  onFetchFavorites: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onFetchFavorites: fetchFavorites
};

export {MyList};
export default connect(null, mapDispatchToProps)(MyList);
