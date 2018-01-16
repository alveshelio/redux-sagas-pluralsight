/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SELECT_TOPIC,
  REQUEST_TOPICS,
  REQUEST_TOPICS_SUCCEEDED,
  REQUEST_TOPICS_FAILED,
  TOGGLE_DRAWER,
} from './constants';

const initialState = fromJS({
  topics: [],
  selectedTopic: {},
  isDrawerOpen: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TOPIC:
      return state.set(['selectedTopic'], action.topic).setIn(['isDrawerOpen'], false);
    case REQUEST_TOPICS:
      return state;
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
