import React from 'react';
import {render} from '@testing-library/react';
import {Route, Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {AppRoute} from '../../const';
import Film from './film';
import {NameSpace} from '../../store/reducer';
import {filmsAdapted} from '../../tests-mocks';

const mockStore = configureStore({});
it(`Film should render correctly`, () => {
  window.scrollTo = jest.fn();
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationError: false,
      userAuthorizationInfo: null,
    },
    [NameSpace.DATA]: {
      films: filmsAdapted,
    }
  });

  const history = createMemoryHistory();
  history.push(`/films/2`);

  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Route path={AppRoute.FILM}>
            <Film />
          </Route>
        </Router>
      </redux.Provider>
  );

  expect(container).toMatchSnapshot();
});
