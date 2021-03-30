import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFoundPage from '../not-found-page/not-found-page';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import ServerErrorScreen from '../server-error-screen/server-error-screen';
import {AppRoute} from '../../const';
import {getIsDataLoaded, getIsServerError} from '../../store/data/selectors';

const App = () => {
  const isDataLoaded = useSelector(getIsDataLoaded);
  const isServerError = useSelector(getIsServerError);

  if (isServerError) {
    return (
      <ServerErrorScreen />
    );
  }

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
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
  );
};

export default App;
