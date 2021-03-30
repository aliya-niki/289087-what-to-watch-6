import React from 'react';
import {render, screen} from '@testing-library/react';
import {reviews} from '../../tests-mocks';

import MovieReview from './movie-review';

it(`MovieReview should render correctly`, () => {

  const {container} = render(
      <MovieReview review={reviews[1]}/>
  );

  expect(screen.getByText(reviews[1].comment)).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
