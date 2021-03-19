import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {sendReview} from '../../store/data/operations';
import {ReviewPostStatus} from '../../const';
import {getReviewPostStatus} from '../../store/data/selectors';

const RATING_STARS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const DEFAULT_RATING = 2;
const COMMENT_MAX_LENGTH = 400;
const COMMENT_MIN_LENGTH = 50;

const AddReviewForm = ({onSubmit, reviewPostStatus}) => {
  const [rating, setRating] = useState(DEFAULT_RATING);
  const [comment, setComment] = useState(``);
  const {id} = useParams();

  useEffect(() => {
    if (reviewPostStatus === ReviewPostStatus.LOADED) {
      setRating(DEFAULT_RATING);
      setComment(``);
    }
  }, [reviewPostStatus]);

  const handleRatingChange = ({target}) => setRating(target.value);
  const handleCommentChange = ({target}) => setComment(target.value);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(id, rating, comment);
  };

  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={handleSubmit}
    >
      <div className="rating">
        <div className="rating__stars">
          {RATING_STARS.map((starsNumber) => (
            <React.Fragment key={starsNumber}>
              <input className="rating__input"
                id={`star-${starsNumber}`}
                type="radio"
                name="rating"
                value={starsNumber}
                defaultChecked={starsNumber === DEFAULT_RATING}
                onChange={handleRatingChange}
                disabled={reviewPostStatus === ReviewPostStatus.LOADING} />
              <label className="rating__label" htmlFor={`star-${starsNumber}`}>Rating {starsNumber}</label>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={handleCommentChange}
          maxLength={COMMENT_MAX_LENGTH}
          minLength={COMMENT_MIN_LENGTH}
          disabled={reviewPostStatus === ReviewPostStatus.LOADING}>
        </textarea>

        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={comment.length < COMMENT_MIN_LENGTH ||
              comment.length > COMMENT_MAX_LENGTH ||
              reviewPostStatus === ReviewPostStatus.LOADING}
          >
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
  reviewPostStatus: PropTypes.string,
  onSubmit: PropTypes.func,
};

const mapStateToProps = (state) => ({
  reviewPostStatus: getReviewPostStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, rating, comment) {
    dispatch(sendReview(id, rating, comment));
  }
});

export {AddReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewForm);
