import React, {useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../../store/api-actions';
import {AppRoute} from '../../const';
import Footer from '../footer/footer';

const SignIn = ({onSubmit, authorizationError}) => {
  const [isEmailValid, setEmailValidity] = useState(true);
  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoute.MAIN} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>

          {!isEmailValid && <p>Please enter a valid email address</p>}

          {authorizationError && <p>We can’t recognize this email <br/> and password combination. Please try again.</p>}

          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                ref={loginRef}
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                required
                onInvalid={() => setEmailValidity(false)}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                ref={passwordRef}
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  authorizationError: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationError: state.authorizationError,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
