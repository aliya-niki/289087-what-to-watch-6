import React from 'react';
import PropTypes from 'prop-types';
import {reviewPropsValidation} from '../../props-validation';
import dayjs from 'dayjs';

const MovieReviews = ({reviews}) => (
  <div className="movie-card__reviews movie-card__row">
    <div className="movie-card__reviews-col">
      {reviews.map(({user, rating, comment, date}, index) => <div className="review" key={`comment-${user.name}-${index}`}>
        <blockquote className="review__quote">
          <p className="review__text">{comment}</p>

          <footer className="review__details">
            <cite className="review__author">{user.name}</cite>
            <time className="review__date" dateTime={dayjs(date).format(`YYYY-MM-DD`)}>{dayjs(date).format(`MMMM D, YYYY`)}</time>
          </footer>
        </blockquote>

        <div className="review__rating">{rating}</div>
      </div>)}
    </div>
  </div>
);

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropsValidation.review).isRequired,
};

export default MovieReviews;
