import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../services/api";
import {ActionType} from "./actions";
import {ActionType as MiddlewaresActionType} from '../middlewares/actions';
import {addToFavorite, fetchFavorites, fetchFilmsList, fetchPromo, sendReview} from './operations';
import {APIRoute, ReviewPostStatus} from '../../const';
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

  it(`Should make a correct API call to comments/:id with sendReview()`, () => {
    const fakeComment = {
      id: 1,
      rating: 8,
      comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    };

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const sendReviewLoader = sendReview(fakeComment.id, fakeComment.rating, fakeComment.comment);

    apiMock
      .onPost(`${APIRoute.COMMENTS}/${fakeComment.id}`)
      .reply(200, fakeComment);

    return sendReviewLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_REVIEW_POST_STATUS,
          payload: ReviewPostStatus.LOADING,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_REVIEW_POST_STATUS,
          payload: ReviewPostStatus.LOADED,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: MiddlewaresActionType.REDIRECT_TO_ROUTE,
          payload: `${APIRoute.FILMS}/${fakeComment.id}`,
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
      .reply(200, promoAdapted);

    return addToFavoriteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });
});
