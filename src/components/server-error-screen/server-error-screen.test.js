import React from 'react';
import {render} from '@testing-library/react';
import ServerErrorScreen from './server-error-screen';

test(`ServerErrorScreen should render correctly`, () => {
  const {container} = render(<ServerErrorScreen />);

  expect(container).toMatchSnapshot();
});
