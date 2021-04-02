import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import {connect, useSelector} from 'react-redux';
import {ReviewPostStatus, ReviewParameter} from '../../const';
import {sendReview} from '../../store/review/operations';
import {getReviewPostStatusSelector} from '../../store/review/selectors';
import RatingInput from '../rating-input/rating-input';
import ReviewTextarea from '../review-textarea/review-textarea';

const AddReviewForm = ({onReviewSubmit}) => {
  const [rating, setRating] = useState(ReviewParameter.DEFAULT_RATING);
  const [comment, setComment] = useState(``);
  const {id} = useParams();

  const reviewPostStatus = useSelector(getReviewPostStatusSelector);

  useEffect(() => {
    if (reviewPostStatus === ReviewPostStatus.LOADED) {
      setRating(ReviewParameter.DEFAULT_RATING);
      setComment(``);
    }
  }, [reviewPostStatus]);

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
    onReviewSubmit(id, rating, comment);
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

AddReviewForm.propTypes = {
  onReviewSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onReviewSubmit: sendReview
};

export {AddReviewForm};
export default connect(null, mapDispatchToProps)(AddReviewForm);
