import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect, useSelector} from 'react-redux';
import {getIsAuthorizedSelector, getUserAuthorizationInfoSelector} from '../../store/user/selectors';
import {AppRoute} from '../../const';
import {logout} from '../../store/user/operations';

const Header = ({additionalClassName, children, onLogout}) => {
  const isAuthorized = useSelector(getIsAuthorizedSelector);
  const userAuthorizationInfo = useSelector(getUserAuthorizationInfoSelector);

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
        {isAuthorized
          ? <div style={{display: `flex`, alignItems: `center`}}>
            <div className="user-block__avatar" style={{marginRight: `15px`}}>
              <Link to={AppRoute.MY_LIST} className="user-block__link">
                <img
                  src={userAuthorizationInfo.avatarUrl}
                  alt="User avatar"
                  width="63" height="63"
                />
              </Link>
            </div>
            <a className="user-block__link" onClick={onLogout} style={{cursor: `pointer`}}>Logout</a>
          </div>
          : <Link to={AppRoute.LOGIN} className="user-block__link">
            Sign in
          </Link>
        }
      </div>
    </header>
  );
};

Header.propTypes = {
  additionalClassName: PropTypes.string,
  children: PropTypes.element,
  onLogout: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onLogout: logout,
};

export {Header};
export default connect(null, mapDispatchToProps)(Header);
