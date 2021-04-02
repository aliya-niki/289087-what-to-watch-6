import React from 'react';
import {render} from '@testing-library/react';
import {reviews} from '../../tests-mocks';

import MovieReview from './movie-review';

it(`MovieReview should render correctly`, () => {

  const {container} = render(
      <MovieReview review={reviews[1]}/>
  );

  expect(container).toMatchSnapshot();
});
