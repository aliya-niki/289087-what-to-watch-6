import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import browserHistory from '../../browser-history';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFoundPage from '../not-found-page/not-found-page';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import {fetchFilmsList, fetchPromo} from "../../store/api-actions";
import {AppRoute} from '../../const';

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
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>
        <PrivateRoute exact
          path={AppRoute.MY_LIST}
          render={() => <MyList />}>
        </PrivateRoute>
        <Route exact path={AppRoute.FILM}>
          <Film />
        </Route>
        <PrivateRoute exact
          path={AppRoute.REVIEW}
          render={() => <AddReview />}>
        </PrivateRoute>
        <Route exact path={AppRoute.PLAYER}>
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
