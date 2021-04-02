import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RatingInput from './rating-input';

const mockRatingValue = `Rating 8`;

it(`RatingInput should render correctly`, () => {
  render(
      <RatingInput onRatingChange={jest.fn()} disabled={false}/>
  );

  userEvent.click(screen.getByText(mockRatingValue));
  expect(screen.getByLabelText(mockRatingValue)).toBeChecked();
});
