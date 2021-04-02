import {createSelector} from 'reselect';
import get from 'lodash/get';
import {NameSpace} from '../reducer';
import {getFilmsSelector} from '../films/selectors';
import {filterByGenre} from '../../utils';
import {DEFAULT_ACTIVE_GENRE} from '../../const';

export const getActiveGenreSelector = (state) => get(state, `${NameSpace.APP}.activeGenre`, DEFAULT_ACTIVE_GENRE);

export const getFilmsFilteredByGenreSelector = createSelector(
    [getFilmsSelector, getActiveGenreSelector],
    (films, activeGenre) => {
      return filterByGenre(films, activeGenre);
    }
);

