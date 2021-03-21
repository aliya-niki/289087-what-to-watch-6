import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

const NotFoundPage = () => (
  <React.Fragment>
    <h1>404. Page not found</h1>
    <Link to={AppRoute.MAIN}>Вернуться на главную</Link>
  </React.Fragment>
);

export default NotFoundPage;
