import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {filmPropsValidation, reviewPropsValidation} from '../../props-validation';
import MovieOverview from '../movie-overview/movie-overview';
import MovieDetails from '../movie-details/movie-details';
import MovieReviews from '../movie-reviews/movie-reviews';

const MovieCardTabs = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

const Tabs = ({film, reviews}) => {
  const [activeTab, setActiveTab] = useState(MovieCardTabs.OVERVIEW);

  const handleOnTabClick = (evt) => {
    evt.preventDefault();
    setActiveTab(evt.target.dataset.value);
  };

  const renderActiveTab = (tab) => {
    switch (tab) {
      case MovieCardTabs.DETAILS:
        return <MovieDetails film={film} />;
      case MovieCardTabs.REVIEWS:
        return <MovieReviews reviews={reviews} />;
      case MovieCardTabs.OVERVIEW:
      default:
        return <MovieOverview film={film} />;
    }
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.values(MovieCardTabs).map((tab) =>
            <li className={`movie-nav__item ${tab === activeTab ? `movie-nav__item--active` : ``}`} key={tab}>
              <a href="#"
                className="movie-nav__link"
                data-value={tab}
                onClick={handleOnTabClick}>
                {tab}
              </a>
            </li>)}
        </ul>
      </nav>
      {renderActiveTab(activeTab)}
    </div>
  );
};

Tabs.propTypes = {
  film: filmPropsValidation.film,
  reviews: PropTypes.arrayOf(reviewPropsValidation.review).isRequired,
};

export default Tabs;
