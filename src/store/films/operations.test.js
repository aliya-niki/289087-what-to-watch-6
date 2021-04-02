import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../services/api";
import {ActionType} from "./actions";
import {fetchFilmsList, fetchPromo} from './operations';
import {APIRoute} from '../../const';
import {filmsAdapted, filmsRaw} from '../../tests-mocks';

const api = createAPI(() => {});

const [promoRaw] = filmsRaw;
const [promoAdapted] = filmsAdapted;

describe(`Async operations work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFilmsList();

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, filmsRaw);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: filmsAdapted,
        });
      });
  });

  it(`Should make a correct API call to /promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoLoader = fetchPromo();

    apiMock
      .onGet(APIRoute.PROMO)
      .reply(200, promoRaw);

    return promoLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO,
          payload: promoAdapted,
        });
      });
  });
});
