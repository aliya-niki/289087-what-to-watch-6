import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Route} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {filmsAdapted} from '../../tests-mocks';
import {NameSpace} from '../../store/reducer';
import {AppRoute} from '../../const';
import Player from './player';

const mockStore = configureStore({});
const [promo] = filmsAdapted;

it(`Player should render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationError: false,
      userAuthorizationInfo: null,
    },
    [NameSpace.DATA]: {
      films: filmsAdapted,
      promo,
    }
  });

  const history = createMemoryHistory();
  history.push(`/player/2`);

  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Route path={AppRoute.PLAYER} >
            <Player/>
          </Route>
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/Exit/i)).toBeInTheDocument();
  expect(screen.getByText(/Full screen/i)).toBeInTheDocument();
  expect(screen.getByText(/Play/i)).toBeInTheDocument();

  expect(container).toMatchSnapshot();
});

