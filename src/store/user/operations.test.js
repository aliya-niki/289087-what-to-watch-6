import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {ActionType} from './actions';
import {ActionType as MiddlewaresActionType} from '../middlewares/actions';
import {ActionType as DataActionType} from '../data/actions';
import {checkAuth, login, logout} from './operations';
import {APIRoute, AppRoute} from '../../const';
import {authRaw, authAdapted, user} from '../../tests-mocks';

const api = createAPI(() => {});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /login in checkAuth()`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, authRaw);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER_INFO,
          payload: authAdapted,
        });
      });
  });

  it(`Should make a correct API call to /login with login()`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginLoader = login(user);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, authRaw);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER_INFO,
          payload: authAdapted,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_AUTHORIZATION_ERROR,
          payload: false,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: MiddlewaresActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.MAIN,
        });
      });
  });

  it(`Should make a correct API call to /logout with logout()`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    apiMock
      .onGet(APIRoute.LOGOUT)
      .reply(200);

    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER_INFO,
          payload: null,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: DataActionType.LOAD_FAVORITES,
          payload: [],
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: MiddlewaresActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.MAIN,
        });
      });
  });
});
