import React from 'react';
import {render} from '@testing-library/react';
import ShowMore from './show-more';

it(`ShowMore should render correctly`, () => {
  const {container} = render(
      <ShowMore onShowMoreClick={jest.fn()}/>
  );

  expect(container).toMatchSnapshot();
});
