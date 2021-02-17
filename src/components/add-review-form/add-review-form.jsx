import React, {useState} from 'react';

const RATING_STARS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const AddReviewForm = () => {
  const [review, setReview] = useState({rating: 0, comment: ``});
  const handleRatingChange = ({target}) => setReview({...review, rating: target.value});
  const handleCommentChange = ({target}) => setReview({...review, comment: target.value});

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {RATING_STARS.map((starsNumber) => (
            <React.Fragment key={starsNumber}>
              <input className="rating__input"
                id={`star-${starsNumber}`}
                type="radio"
                name="rating"
                value={starsNumber}
                onChange={handleRatingChange} />
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
          onChange={handleCommentChange}>
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
};

export default AddReviewForm;
