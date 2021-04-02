import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {NameSpace} from '../../store/reducer';
import {authAdapted, filmsAdapted} from '../../tests-mocks';
import AddToFavorites from './add-to-favorites';

const mockStore = configureStore({});

describe(`AddToFavorites button`, () => {

  it(`should render correctly if film is not in favorites`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationError: false,
        userAuthorizationInfo: authAdapted,
      },
      [NameSpace.DATA]: {
        favorites: [],
        films: filmsAdapted,
        promo: filmsAdapted[0],
      }
    });

    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <AddToFavorites id={1} onAddToFavorite={jest.fn()}/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it(`should render correctly if film is in favorites`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationError: false,
        userAuthorizationInfo: authAdapted,
      },
      [NameSpace.DATA]: {
        favorites: filmsAdapted,
        films: filmsAdapted,
        promo: filmsAdapted[0],
      }
    });

    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <AddToFavorites id={2} onAddToFavorite={jest.fn()}/>
          </Router>
        </redux.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
