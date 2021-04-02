import React from 'react';
import {render} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {NameSpace} from '../../store/reducer';
import {filmsAdapted} from '../../tests-mocks';
import {DEFAULT_ACTIVE_GENRE} from '../../const';
import GenresList from './genres-list';

const mockStore = configureStore({});

it(`GenresList should render correctly`, () => {
  const store = mockStore({
    [NameSpace.APP]: {
      activeGenre: DEFAULT_ACTIVE_GENRE,
    },
    [NameSpace.DATA]: {
      films: filmsAdapted,
      promo: filmsAdapted[0],
    }
  });

  const {container} = render(
      <redux.Provider store={store}>
        <GenresList onGenreChange={jest.fn()}/>
      </redux.Provider>
  );

  expect(container).toMatchSnapshot();
});

