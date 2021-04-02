import get from 'lodash/get';
import {NameSpace} from '../reducer';

export const getIsAuthorizedSelector = (state) => !!getUserAuthorizationInfoSelector(state);

export const getUserAuthorizationInfoSelector = (state) => get(state, `${NameSpace.USER}.userAuthorizationInfo`, null);

export const getAuthorizationErrorSelector = (state) => get(state, `${NameSpace.USER}.authorizationError`, false);
