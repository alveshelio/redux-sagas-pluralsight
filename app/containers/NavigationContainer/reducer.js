/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';

import {
  SELECT_TOPIC,
  REQUEST_TOPICS_SUCCEEDED,
  REQUEST_TOPICS_FAILED,
  TOGGLE_DRAWER,
} from './constants';


const initialState = fromJS({
  topics: [],
  selectedTopic: null,
  routerLocation: null,
  isDrawerOpen: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      return state.setIn(['routerLocation'], action.payload.pathname);
    case SELECT_TOPIC:
      return state.set(['selectedTopic'], action.topic).setIn(['isDrawerOpen'], false);
    case REQUEST_TOPICS_SUCCEEDED:
      return state.setIn(['topics'], action.topics);
    case REQUEST_TOPICS_FAILED:
      return state.setIn(['message'], action.message);
    case TOGGLE_DRAWER:
      return state.setIn(['isDrawerOpen'], !state.get('isDrawerOpen'));
    default:
      return state;
  }
};
