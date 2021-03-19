import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getIsAuthorized, getUserAuthorizationInfo} from '../../store/user/selectors';
import {AppRoute} from '../../const';

const Header = ({additionalClassName, children}) => {
  const isAuthorized = useSelector(getIsAuthorized);
  const userAuthorizationInfo = useSelector(getUserAuthorizationInfo);

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
          ? <Link to={AppRoute.MY_LIST}>
            <div className="user-block__avatar">
              <img
                src={userAuthorizationInfo.avatarUrl}
                alt="User avatar"
                width="63" height="63"
              />
            </div>
          </Link>
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
};

export default Header;
