import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router';
import {createMemoryHistory} from 'history';
import {filmsAdapted} from '../../tests-mocks';
import MoviesList from './movies-list';

it(`MoviesList should render correctly`, () => {
  const history = createMemoryHistory();

  const {container} = render(
      <Router history={history}>
        <MoviesList films={filmsAdapted}/>
      </Router>
  );

  expect(container).toMatchSnapshot();
});
