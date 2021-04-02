import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../services/api";
import {ActionType} from "./actions";
import {addToFavorite, fetchFavorites} from './operations';
import {APIRoute} from '../../const';
import {filmsAdapted, filmsRaw} from '../../tests-mocks';

const api = createAPI(() => {});

describe(`Async operations work correctly`, () => {
  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesLoader = fetchFavorites();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, filmsRaw);

    return favoritesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: filmsAdapted,
        });
      });
  });

  it(`Should make a correct API call to /favorite/:id/:status with addToFavorite()`, () => {
    const id = 1;
    const status = true;

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const addToFavoriteLoader = addToFavorite(id, status);

    apiMock
      .onPost(`${APIRoute.FAVORITE}/${id}/${Number(status)}`)
      .reply(200, filmsAdapted[0]);

    return addToFavoriteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });
});
