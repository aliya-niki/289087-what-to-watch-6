import get from 'lodash/get';
import {NameSpace} from '../reducer';

export const getFavoritesSelector = (state) => get(state, `${NameSpace.FAVORITES}.favorites`, []);
