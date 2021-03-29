import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {AppRoute, DEFAULT_ACTIVE_GENRE} from '../../const';
import App from './app';
import {NameSpace} from '../../store/reducer';
import {authAdapted, filmsAdapted} from '../../tests-mocks';

const [promo] = filmsAdapted;

const mockStore = configureStore({});
describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`should render 'Main' when user navigates to '/' url`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationError: false,
        userAuthorizationInfo: null,
      },
      [NameSpace.DATA]: {
        favorites: [],
        films: filmsAdapted,
        promo,
      },
      [NameSpace.APP]: {
        activeGenre: DEFAULT_ACTIVE_GENRE,
      }
    });

    const history = createMemoryHistory();
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/WTW/i)).toBeInTheDocument();
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/© 2019 What to watch Ltd./i)).toBeInTheDocument();
  });

  it(`should render 'SignIn' when user navigates to '/login' url`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationError: false,
        userAuthorizationInfo: null,
      },
      [NameSpace.DATA]: {
        favorites: [],
        films: filmsAdapted,
        promo,
      }
    });

    const history = createMemoryHistory();
    history.push(AppRoute.LOGIN);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getAllByText(/Sign in/i).length).toBe(2);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it(`should render 'MyList' when user navigates to '/mylist' url`, async () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationError: false,
        userAuthorizationInfo: authAdapted,
      },
      [NameSpace.DATA]: {
        favorites: filmsAdapted,
        films: filmsAdapted,
        promo,
      }
    });

    const history = createMemoryHistory();
    history.push(AppRoute.MY_LIST);

    store.dispatch = () => {};

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(/My list/i)).toBeInTheDocument();
    });
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
    expect(screen.getByText(filmsAdapted[0].name)).toBeInTheDocument();
  });

  it(`should render 'Film' when user navigates to '/film' url`, async () => {
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
    history.push(`/films/1`);

    store.dispatch = () => {};

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(/WTW/i)).toBeInTheDocument();
    });
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/© 2019 What to watch Ltd./i)).toBeInTheDocument();
  });

  it(`should render 'Player' when user navigates to '/player' url`, () => {
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
    history.push(`/player/1`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
    expect(screen.getByText(/Full screen/i)).toBeInTheDocument();
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
  });

  it(`should render 'AddReview' when user navigate to '/review' url`, async () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationError: false,
        userAuthorizationInfo: authAdapted,
      },
      [NameSpace.DATA]: {
        films: filmsAdapted,
        promo,
      }
    });

    const history = createMemoryHistory();
    history.push(`/films/1/review`);

    store.dispatch = () => {};

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Add review/i)).toBeInTheDocument();
    });
    expect(screen.getByText(/Post/i)).toBeInTheDocument();
    expect(screen.getByText(/WTW/i)).toBeInTheDocument();
  });

  it(`should render 'NotFoundScreen' when user navigates to non-existent route`, () => {
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
    history.push(`/non-existent-route`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`404. Page not found`)).toBeInTheDocument();
    expect(screen.getByText(`Вернуться на главную`)).toBeInTheDocument();
  });
});
