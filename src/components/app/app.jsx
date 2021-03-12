import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFoundPage from '../not-found-page/not-found-page';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchFilmsList, fetchPromo} from "../../store/api-actions";

const App = ({isFilmsDataLoaded, onLoadData}) => {

  useEffect(() => {
    if (!isFilmsDataLoaded) {
      onLoadData();
    }
  }, [isFilmsDataLoaded]);


  if (!isFilmsDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route exact path='/login'>
          <SignIn />
        </Route>
        <Route exact path='/mylist'>
          <MyList />
        </Route>
        <Route exact path='/films/:id'>
          <Film />
        </Route>
        <Route exact path='/films/:id/review'>
          <AddReview />
        </Route>
        <Route exact path='/player/:id'>
          <Player />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  isFilmsDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isFilmsDataLoaded: state.isFilmsDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFilmsList());
    dispatch(fetchPromo());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
