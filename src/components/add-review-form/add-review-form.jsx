import React, {useState, useEffect, useCallback} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {sendReview} from '../../store/data/operations';
import {ReviewPostStatus, ReviewParameter} from '../../const';
import {getReviewPostStatus} from '../../store/data/selectors';
import RatingInput from '../rating-input/rating-input';
import ReviewTextarea from '../review-textarea/review-textarea';
import {setReviewPostStatus} from '../../store/data/actions';

const AddReviewForm = () => {
  const [rating, setRating] = useState(ReviewParameter.DEFAULT_RATING);
  const [comment, setComment] = useState(``);
  const {id} = useParams();

  const dispatch = useDispatch();
  const reviewPostStatus = useSelector(getReviewPostStatus);

  useEffect(() => {
    if (reviewPostStatus === ReviewPostStatus.LOADED) {
      setRating(ReviewParameter.DEFAULT_RATING);
      setComment(``);
    }
  }, [reviewPostStatus]);

  useEffect(() => {
    return () => {
      dispatch(setReviewPostStatus(ReviewPostStatus.PENDING));
    };
  }, []);

  const handleRatingChange = useCallback(
      ({target}) => setRating(target.value),
      [rating]
  );

  const handleCommentChange = useCallback(
      ({target}) => setComment(target.value),
      [comment]
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(sendReview(id, rating, comment));
  };

  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={handleSubmit}
    >
      <RatingInput
        onRatingChange={handleRatingChange}
        disabled={reviewPostStatus === ReviewPostStatus.LOADING}/>

      <div className="add-review__text">
        <ReviewTextarea
          onCommentChange={handleCommentChange}
          disabled={reviewPostStatus === ReviewPostStatus.LOADING}/>

        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={comment.length < ReviewParameter.COMMENT_MIN_LENGTH ||
              comment.length > ReviewParameter.COMMENT_MAX_LENGTH ||
              reviewPostStatus === ReviewPostStatus.LOADING}>
            Post
          </button>
        </div>

        {reviewPostStatus === ReviewPostStatus.ERROR &&
          <p>There was an error posting your review, please try again.</p>
        }

      </div>
    </form>
  );
};

export default AddReviewForm;
