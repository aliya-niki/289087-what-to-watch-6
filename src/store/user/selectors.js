import {NameSpace} from '../reducer';

export const getIsAuthorized = (state) => !!state[NameSpace.USER].userAuthorizationInfo;
export const getUserAuthorizationInfo = (state) => state[NameSpace.USER].userAuthorizationInfo;
export const getAuthorizationError = (state) => state[NameSpace.USER].authorizationError;
