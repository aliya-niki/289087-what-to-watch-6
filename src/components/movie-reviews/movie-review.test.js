import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import axios from 'axios';
import {reviews} from '../../tests-mocks';
import MovieReviews from './movie-reviews';

jest.mock(`axios`);

it(`MovieReviews should render correctly`, async () => {
  const fakeResponse = reviews;

  axios.mockResolvedValue({data: fakeResponse});

  const {container} = render(<MovieReviews id={2}/>);

  await waitFor(() => {
    expect(screen.queryByText(`Loading reviews`)).not.toBeInTheDocument();
  });

  expect(screen.getByText(reviews[0].user.name)).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
