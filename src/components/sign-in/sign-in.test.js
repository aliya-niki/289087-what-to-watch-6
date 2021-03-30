import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import {NameSpace} from '../../store/reducer';
import SignIn from './sign-in';

const mockStore = configureStore({});

it(`SignIn should render correctly`, () => {
  const history = createMemoryHistory();
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationError: false,
      userAuthorizationInfo: null,
    }
  });

  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <SignIn />
        </Router>
      </redux.Provider>
  );

  expect(screen.getAllByText(/Sign in/i).length).toBe(2);
  expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

  userEvent.type(screen.getByTestId(`email`), `keks`);
  userEvent.type(screen.getByTestId(`password`), `123456`);

  expect(screen.getByDisplayValue(/keks/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();

  expect(container).toMatchSnapshot();
});
