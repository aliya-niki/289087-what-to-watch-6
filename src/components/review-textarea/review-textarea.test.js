import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReviewTextarea from './review-textarea';

const mockText = `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`;

it(`ReviewTextarea should render correctly`, () => {
  render(
      <ReviewTextarea onCommentChange={jest.fn()} disabled={false}/>
  );

  userEvent.type(screen.getByTestId(`review-textarea`), mockText);

  expect(screen.getByDisplayValue(mockText)).toBeInTheDocument();
});
