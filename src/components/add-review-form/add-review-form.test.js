import React from 'react';
import '@testing-library/jest-dom';
import {render} from '@testing-library/react';
import {Route, Router} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {NameSpace} from '../../store/reducer';
import {filmsAdapted, authAdapted} from '../../tests-mocks';
import {AppRoute, ReviewPostStatus} from '../../const';
import AddReviewForm from './add-review-form';

const mockStore = configureStore({});

it(`AddReviewForm should render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationError: false,
      userAuthorizationInfo: authAdapted,
    },
    [NameSpace.DATA]: {
      films: filmsAdapted,
      promo: filmsAdapted[0],
      reviewPostStatus: ReviewPostStatus.PENDING,
    }
  });

  const history = createMemoryHistory();
  history.push(`/films/2/review`);

  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Route path={AppRoute.REVIEW}>
            <AddReviewForm onReviewSubmit={jest.fn()} />
          </Route>
        </Router>
      </redux.Provider>

  );

  expect(container).toMatchSnapshot();
});

