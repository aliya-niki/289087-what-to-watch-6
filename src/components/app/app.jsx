import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {filmPropsValidation, reviewPropsValidation} from '../../props-validation';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFoundPage from '../not-found-page/not-found-page';

const App = ({films, reviews}) => {
  const myListFilms = films.filter((film) => (film.isFavorite));

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main
            promo={films[0]}
            films={films}
          />
        </Route>
        <Route exact path='/login'>
          <SignIn />
        </Route>
        <Route exact path='/mylist'>
          <MyList films={myListFilms}/>
        </Route>
        <Route exact path='/films/:id'>
          <Film films={films} reviews={reviews} />
        </Route>
        <Route exact path='/films/:id/review'>
          <AddReview films={films}/>
        </Route>
        <Route exact path='/player/:id'>
          <Player films={films}/>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  films: PropTypes.arrayOf(filmPropsValidation.film).isRequired,
  reviews: PropTypes.arrayOf(reviewPropsValidation.review).isRequired,
};

export default App;
