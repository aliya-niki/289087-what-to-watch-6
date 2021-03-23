import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {addToFavorite} from '../../store/data/operations';
import {getIsAuthorized} from '../../store/user/selectors';
import {AppRoute} from '../../const';
import {useHistory} from 'react-router';
import {getFavorites} from '../../store/data/selectors';

const AddToFavorites = ({id}) => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(getIsAuthorized);
  const history = useHistory();
  const favorites = useSelector(getFavorites);

  const isInFavorites = Array.isArray(favorites) ? Boolean(favorites.find((fave) => fave.id === id)) : false;

  const handleOnMyListClick = () => {
    if (!isAuthorized) {
      history.push(AppRoute.LOGIN);
      return;
    }

    dispatch(addToFavorite(id, !isInFavorites));
  };

  return (
    <button className="btn btn--list movie-card__button" type="button" onClick={handleOnMyListClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>{isInFavorites ? `In my list` : `My list`}</span>
    </button>
  );
};

AddToFavorites.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AddToFavorites;
