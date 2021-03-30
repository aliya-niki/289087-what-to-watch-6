import React from 'react';
import {render} from '@testing-library/react';
import LoadingScreen from './loading-screen';

test(`LoadingScreen should render correctly`, () => {
  const {container} = render(<LoadingScreen />);

  expect(container).toMatchSnapshot();
});
