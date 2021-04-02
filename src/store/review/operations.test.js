import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../services/api";
import {ActionType} from "./actions";
import {ActionType as MiddlewaresActionType} from '../middlewares/actions';
import {sendReview} from './operations';
import {APIRoute, ReviewPostStatus} from '../../const';

const api = createAPI(() => {});

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
