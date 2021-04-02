import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAPI} from '../services/api';
import reducer from './reducer';
import {setUserInfo} from './user/actions';
import {redirect} from './middlewares/redirect';

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

export default store;
