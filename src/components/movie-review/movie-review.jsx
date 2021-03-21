import React from 'react';
import dayjs from 'dayjs';
import {reviewPropsValidation} from '../../props-validation';

const MovieReview = ({review}) => {
  const {comment, user, date, rating} = review;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={dayjs(date).format(`YYYY-MM-DD`)}>{dayjs(date).format(`MMMM D, YYYY`)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

MovieReview.propTypes = {
  review: reviewPropsValidation.review,
};

export default MovieReview;
