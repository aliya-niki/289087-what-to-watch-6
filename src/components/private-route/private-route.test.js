import React from 'react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {NameSpace} from '../../store/reducer';
import {authAdapted} from '../../tests-mocks';
import PrivateRoute from './private-route';

const mockStore = configureStore({});
let history;

describe(`PrivateRouter`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push(`/private`);
  });

  it(`should redirect to '/' when user is not authorized`, () => {
    const store = mockStore({
      [NameSpace.USER]: {userAuthorizationInfo: null}
    });

    render(
        <Provider store={store}>
          <Router history={history}>
            <Route exact path="/login"><h1>Public Route</h1></Route>
            <PrivateRoute
              exact
              path="/private"
              render={() => (<h1>Private Route</h1>)}/>
          </Router>
        </Provider>
    );

    expect(screen.getByText(/Public Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private Route/i)).not.toBeInTheDocument();
  });

  it(`should render 'component' correctly  with authorized user`, () => {
    const store = mockStore({
      [NameSpace.USER]: {userAuthorizationInfo: authAdapted},
    });

    render(
        <Provider store={store}>
          <Router history={history}>
            <Route exact path="/login"><h1>Public Route</h1></Route>
            <PrivateRoute
              exact
              path="/private"
              render={() => (<h1>Private Route</h1>)} />
          </Router>
        </Provider>
    );

    expect(screen.getByText(/Private Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Public Route/i)).not.toBeInTheDocument();
  });
});
