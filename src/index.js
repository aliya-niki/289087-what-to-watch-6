import React from 'react';
import ReactDOM from 'react-dom';
import {Router as BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import browserHistory from './browser-history';
import store from './store/store';
import {checkAuth} from './store/user/operations';
import {fetchFavorites, fetchFilmsList, fetchPromo} from './store/data/operations';
import App from './components/app/app';

store.dispatch(checkAuth());
store.dispatch(fetchFilmsList());
store.dispatch(fetchPromo());
store.dispatch(fetchFavorites());

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App/>
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
);
