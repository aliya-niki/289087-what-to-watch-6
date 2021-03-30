import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {NameSpace} from '../../store/reducer';
import Header from './header';
import {authAdapted} from '../../tests-mocks';

const mockStore = configureStore({});

describe(`Header`, () => {
  it(`should render correctly with authorized user`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationError: false,
        userAuthorizationInfo: authAdapted,
      },
    });
    const history = createMemoryHistory();
    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Header additionalClassName={`movie-card__head`}/>
          </Router>
        </redux.Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it(`should render correctly with unauthorized user`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationError: false,
        userAuthorizationInfo: null,
      },
    });
    const history = createMemoryHistory();
    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Header additionalClassName={`movie-card__head`}/>
          </Router>
        </redux.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
