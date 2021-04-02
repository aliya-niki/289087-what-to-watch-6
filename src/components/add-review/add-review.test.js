import React from 'react';
import {Route, Router} from 'react-router-dom';
import {render} from '@testing-library/react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {authAdapted, filmsAdapted} from '../../tests-mocks';
import {NameSpace} from '../../store/reducer';
import AddReview from './add-review';
import {AppRoute, ReviewPostStatus} from '../../const';

const mockStore = configureStore({});

it(`AddReview should render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationError: false,
      userAuthorizationInfo: authAdapted,
    },
    [NameSpace.FILMS]: {
      films: filmsAdapted,
      promo: filmsAdapted[0],
    },
    [NameSpace.REVIEW]: {
      reviewPostStatus: ReviewPostStatus.PENDING,
    }
  });

  const history = createMemoryHistory();
  history.push(`/films/2/review`);

  store.dispatch = () => {};

  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Route path={AppRoute.REVIEW}>
            <AddReview onLogout={jest.fn()}/>
          </Route>
        </Router>
      </redux.Provider>
  );

  expect(container).toMatchSnapshot();
});
