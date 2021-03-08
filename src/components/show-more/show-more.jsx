import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const ShowMore = ({onShowMoreClick}) => (
  <div className="catalog__more">
    <button className="catalog__button" type="button" onClick={() => onShowMoreClick()}>Show more</button>
  </div>
);

ShowMore.propTypes = {
  onShowMoreClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onShowMoreClick() {
    dispatch(ActionCreator.increaseShownFilmsNumber());
  }
});

export {ShowMore};
export default connect(null, mapDispatchToProps)(ShowMore);

