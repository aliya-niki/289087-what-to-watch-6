import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {filmsAdapted} from '../../tests-mocks';
import MovieCard from './movie-card';

describe(`MovieCard`, () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.load = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};
  });
  it(`should render correctly if card isn't active`, () => {
    const history = createMemoryHistory();

    const {container} = render(
        <Router history={history}>
          <MovieCard
            film={filmsAdapted[1]}
            onHover={jest.fn()}
            isActive={false}/>
        </Router>
    );

    expect(screen.getByText(filmsAdapted[1].name)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it(`should render correctly if card is active`, () => {
    const history = createMemoryHistory();

    const {container} = render(
        <Router history={history}>
          <MovieCard
            film={filmsAdapted[1]}
            onHover={jest.fn()}
            isActive={true}/>
        </Router>
    );

    expect(screen.getByText(filmsAdapted[1].name)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

