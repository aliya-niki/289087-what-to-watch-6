import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {filmsAdapted} from '../../tests-mocks';
import Tabs, {MovieCardTabs} from './tabs';

const mockFilm = filmsAdapted[2];

describe(`Tabs`, () => {
  it(`should render correctly with active 'Overview' tab`, () => {
    render(
        <Tabs film={mockFilm}/>
    );

    expect(screen.getByText(mockFilm.description)).toBeInTheDocument();
  });

  it(`should render correctly with active 'Details' tab`, () => {
    render(
        <Tabs film={mockFilm}/>
    );

    userEvent.click(screen.getByTestId(MovieCardTabs.DETAILS));
    expect(screen.getByText(mockFilm.genre)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.director)).toBeInTheDocument();
  });
});
