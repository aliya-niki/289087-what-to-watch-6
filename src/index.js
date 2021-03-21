import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createAPI} from "./services/api";
import reducer from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {setUserInfo} from './store/user/actions';
import {checkAuth} from './store/user/operations';
import {fetchFilmsList, fetchPromo} from './store/data/operations';
import {redirect} from './store/middlewares/redirect';

const api = createAPI(
    () => store.dispatch(setUserInfo(null))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(checkAuth());
store.dispatch(fetchFilmsList());
store.dispatch(fetchPromo());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
