import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {filmPropsValidation} from '../../props-validation';
import MoviesList from '../movies-list/movies-list';
import Header from '../header/header';
import Footer from '../footer/footer';

const MyList = ({films}) => {
  const myListFilms = films.filter((film) => (film.isFavorite));

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
  films: PropTypes.arrayOf(filmPropsValidation.film).isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
});

export {MyList};
export default connect(mapStateToProps, null)(MyList);
