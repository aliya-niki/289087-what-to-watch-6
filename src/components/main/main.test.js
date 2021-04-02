import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {DEFAULT_ACTIVE_GENRE} from '../../const';
import {NameSpace} from '../../store/reducer';
import {filmsAdapted} from '../../tests-mocks';
import Main from './main';

const mockStore = configureStore({});
it(`Main should render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationError: false,
      userAuthorizationInfo: null,
    },
    [NameSpace.DATA]: {
      films: filmsAdapted,
      promo: filmsAdapted[0],
    },
    [NameSpace.APP]: {
      activeGenre: DEFAULT_ACTIVE_GENRE,
    }
  });

  const history = createMemoryHistory();

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/WTW/i)).toBeInTheDocument();
  expect(screen.getByText(/All genres/i)).toBeInTheDocument();
  expect(screen.getByText(filmsAdapted[0].released)).toBeInTheDocument();
});
