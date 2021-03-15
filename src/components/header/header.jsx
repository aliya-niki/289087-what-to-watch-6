import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {AuthorizationStatus} from '../../const';
import {AppRoute} from '../../const';

const Header = ({additionalClassName, authorizationStatus, userAuthorizationInfo, onPageLeave, children}) => {

  return (
    <header className={`page-header ${additionalClassName}`}>
      <div className="logo">
        <Link to={AppRoute.MAIN} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {children}
      <div className="user-block">
        {authorizationStatus === AuthorizationStatus.AUTH ?
          <Link to={AppRoute.MY_LIST} onClick={() => onPageLeave()}>
            <div className="user-block__avatar">
              <img
                src={userAuthorizationInfo.avatarUrl}
                alt="User avatar"
                width="63" height="63"
              />
            </div>
          </Link> :
          <Link to={AppRoute.LOGIN} className="user-block__link" onClick={() => onPageLeave()}>
            Sign in
          </Link>
        }
      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  additionalClassName: PropTypes.string,
  children: PropTypes.element,
  userAuthorizationInfo: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
  onPageLeave: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  userAuthorizationInfo: state.userAuthorizationInfo,
});

const mapDispatchToProps = (dispatch) => ({
  onPageLeave() {
    dispatch(ActionCreator.resetShownFilmsNumber());
  }
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
