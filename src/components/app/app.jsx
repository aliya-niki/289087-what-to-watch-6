import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFoundPage from '../not-found-page/not-found-page';

const App = () => (
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

export default App;
