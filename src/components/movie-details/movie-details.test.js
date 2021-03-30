import React from 'react';
import {render, screen} from '@testing-library/react';
import {filmsAdapted} from '../../tests-mocks';
import MovieDetails from './movie-details';

const mockFilm = filmsAdapted[0];

it(`MovieDetails should render correctly`, () => {
  const {container} = render(
      <MovieDetails film={mockFilm}/>
  );

  expect(screen.getByText(mockFilm.genre)).toBeInTheDocument();
  expect(screen.getByText(mockFilm.director)).toBeInTheDocument();
  expect(screen.getByText(mockFilm.released)).toBeInTheDocument();

  expect(container).toMatchSnapshot();
});

