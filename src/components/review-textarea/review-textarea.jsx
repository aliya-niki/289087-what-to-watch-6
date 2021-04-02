import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {ReviewParameter} from '../../const';

const ReviewTextarea = ({onCommentChange, disabled}) => (
  <textarea className="add-review__textarea"
    name="review-text"
    id="review-text"
    placeholder="Review text"
    onChange={onCommentChange}
    maxLength={ReviewParameter.COMMENT_MAX_LENGTH}
    minLength={ReviewParameter.COMMENT_MIN_LENGTH}
    disabled={disabled}
    data-testid={`review-textarea`} />
);

ReviewTextarea.propTypes = {
  onCommentChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default memo(ReviewTextarea);
