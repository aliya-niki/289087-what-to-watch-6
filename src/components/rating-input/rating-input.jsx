import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {ReviewParameter} from '../../const';

const RATING_STARS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const RatingInput = ({onRatingChange, disabled}) => (
  <div className="rating">
    <div className="rating__stars">
      {RATING_STARS.map((starsNumber) => (
        <React.Fragment key={starsNumber}>
          <input className="rating__input"
            id={`star-${starsNumber}`}
            type="radio"
            name="rating"
            value={starsNumber}
            defaultChecked={starsNumber === ReviewParameter.DEFAULT_RATING}
            onChange={onRatingChange}
            disabled={disabled} />
          <label className="rating__label" htmlFor={`star-${starsNumber}`}>Rating {starsNumber}</label>
        </React.Fragment>
      )
      )}
    </div>
  </div>
);

RatingInput.propTypes = {
  onRatingChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default memo(RatingInput);
