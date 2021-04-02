import {combineReducers} from 'redux';
import {reducer as app} from './app/reducer';
import {reducer as films} from './films/reducer';
import {reducer as user} from './user/reducer';
import {reducer as favorites} from './favorites/reducer';
import {reducer as review} from './review/reducer';

export const NameSpace = {
  FILMS: `FILMS`,
  APP: `APP`,
  USER: `USER`,
  FAVORITES: `FAVORITES`,
  REVIEW: `REVIEW`
};

export default combineReducers({
  [NameSpace.FILMS]: films,
  [NameSpace.APP]: app,
  [NameSpace.USER]: user,
  [NameSpace.FAVORITES]: favorites,
  [NameSpace.REVIEW]: review,
});
