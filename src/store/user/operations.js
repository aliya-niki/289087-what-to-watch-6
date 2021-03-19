import {setUserInfo, setAuthorizationError} from './actions';
import {redirectToRoute} from '../middlewares/actions';
import {AppRoute, APIRoute} from '../../const';
import {adaptDataToUserInfo} from '../../services/adapters';

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(setUserInfo(adaptDataToUserInfo(data))))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(setUserInfo(adaptDataToUserInfo(data)));
      dispatch(setAuthorizationError(false));
      dispatch(redirectToRoute(AppRoute.MAIN));
    })
    .catch(() => dispatch(setAuthorizationError(true)))
);
