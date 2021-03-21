import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {useSelector} from 'react-redux';
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
import {AppRoute} from '../../const';
import {getIsDataLoaded} from '../../store/data/selectors';

const App = () => {
  const isDataLoaded = useSelector(getIsDataLoaded);

  if (!isDataLoaded) {
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

export default App;
