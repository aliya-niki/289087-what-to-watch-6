import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import NotFoundPage from './not-found-page';

it(`NotFoundPage should render correctly`, () => {
  const history = createMemoryHistory();

  const {container} = render(
      <Router history={history}>
        <NotFoundPage />
      </Router>
  );

  expect(screen.getByText(`404. Page not found`)).toBeInTheDocument();
  expect(screen.getByText(`Вернуться на главную`)).toBeInTheDocument();

  expect(container).toMatchSnapshot();
});
