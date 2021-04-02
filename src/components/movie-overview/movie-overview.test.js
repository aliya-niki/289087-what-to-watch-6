import React from 'react';
import {render, screen} from '@testing-library/react';
import {filmsAdapted} from '../../tests-mocks';
import MovieOverview from './movie-overview';

const mockFilm = filmsAdapted[0];

it(`MovieOverview should render correctly`, () => {
  render(
      <MovieOverview film={mockFilm}/>
  );

  expect(screen.getByText(mockFilm.description)).toBeInTheDocument();
  expect(screen.getByText(mockFilm.rating)).toBeInTheDocument();
});
