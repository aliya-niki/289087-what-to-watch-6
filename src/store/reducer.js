import {combineReducers} from 'redux';
import {reducer as app} from './app/reducer';
import {reducer as data} from './data/reducer';
import {reducer as user} from './user/reducer';

export const NameSpace = {
  DATA: `DATA`,
  APP: `APP`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.APP]: app,
  [NameSpace.USER]: user,
});
