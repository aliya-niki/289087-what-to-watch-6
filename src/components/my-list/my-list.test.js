import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {filmsAdapted} from '../../tests-mocks';
import {NameSpace} from '../../store/reducer';
import {authAdapted} from '../../tests-mocks';
import MyList from './my-list';

const mockStore = configureStore({});

it(`MyList should render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationError: false,
      userAuthorizationInfo: authAdapted,
    },
    [NameSpace.DATA]: {
      favorites: filmsAdapted,
      films: filmsAdapted,
    }
  });

  const history = createMemoryHistory();

  store.dispatch = () => {};

  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <MyList />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(/My list/i)).toBeInTheDocument();
  expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  expect(screen.getByText(filmsAdapted[0].name)).toBeInTheDocument();

  expect(container).toMatchSnapshot();
});
