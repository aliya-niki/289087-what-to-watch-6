import React from 'react';
import {render, screen} from '@testing-library/react';
import ShowMore from './show-more';

it(`ShowMore should render correctly`, () => {
  const {container} = render(
      <ShowMore onShowMoreClick={jest.fn()}/>
  );

  expect(screen.getByText(/Show more/i)).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
