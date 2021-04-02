import get from 'lodash/get';
import {NameSpace} from '../reducer';
import {ReviewPostStatus} from '../../const';

export const getReviewPostStatusSelector = (state) => get(state, `${NameSpace.REVIEW}.reviewPostStatus`, ReviewPostStatus.PENDING);

