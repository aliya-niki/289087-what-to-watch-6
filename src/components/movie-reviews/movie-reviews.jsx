import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {BACKEND_URL, APIRoute} from '../../const';
import MovieReview from '../movie-review/movie-review';

const MovieReviews = ({id}) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios(`${BACKEND_URL}${APIRoute.COMMENTS}/${id}`)
      .then((response) => setReviews(response.data))
      .catch((err) => {
        setError(err);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  const reviewsToFirstColumn = reviews.slice(0, Math.ceil(reviews.length / 2));
  const reviewsToSecondColumn = reviews.slice(Math.ceil(reviews.length / 2));

  return (
    <React.Fragment>
      {isLoading ? <p>Loading reviews...</p> : ``}
      {error ? <p>There was an error when loading reviews</p> : ``}

      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {reviewsToFirstColumn.map((review, index) =>
            <MovieReview
              key={`comment-${review.user.name}-${index}`}
              review={review} />
          )}
        </div>
        <div className="movie-card__reviews-col">
          {reviewsToSecondColumn.map((review, index) =>
            <MovieReview
              key={`comment-${review.user.name}-${index}`}
              review={review} />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

MovieReviews.propTypes = {
  id: PropTypes.number.isRequired,
};

export default MovieReviews;
