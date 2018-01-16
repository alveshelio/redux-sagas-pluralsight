/*
 *
 * LinkListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_LINKS_SUCCEEDED,
  REQUEST_LINKS_FAILED,
} from './constants';

const initialState = fromJS({
  links: [],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LINKS_SUCCEEDED:
      return state.setIn(['links'], action.links);
    case REQUEST_LINKS_FAILED:
      return state.setIn(['message'], action.message);
    default:
      return state;
  }
};
