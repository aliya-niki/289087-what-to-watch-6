import React from 'react';
import PropTypes from 'prop-types';
import {connect, useSelector} from 'react-redux';
import {useHistory} from 'react-router';
import {addToFavorite} from '../../store/data/operations';
import {AppRoute} from '../../const';
import {getIsAuthorizedSelector} from '../../store/user/selectors';
import {getFavoritesSelector} from '../../store/data/selectors';

const AddToFavorites = ({id, onAddToFavorite}) => {
  const isAuthorized = useSelector(getIsAuthorizedSelector);
  const history = useHistory();
  const favorites = useSelector(getFavoritesSelector);

  const isInFavorites = Array.isArray(favorites) ? Boolean(favorites.find((fave) => fave.id === id)) : false;

  const handleOnMyListClick = () => {
    if (!isAuthorized) {
      history.push(AppRoute.LOGIN);
      return;
    }

    onAddToFavorite(id, !isInFavorites);
  };

  return (
    <button className="btn btn--list movie-card__button" type="button" onClick={handleOnMyListClick}>
      {isInFavorites
        ? <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list" />
        </svg>
        : <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add" />
        </svg>
      }
      <span>My list</span>
    </button>
  );
};

AddToFavorites.propTypes = {
  id: PropTypes.number.isRequired,
  onAddToFavorite: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onAddToFavorite: addToFavorite,
};

export {AddToFavorites};
export default connect(null, mapDispatchToProps)(AddToFavorites);
