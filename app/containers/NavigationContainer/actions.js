/*
 *
 * NavigationContainer actions
 *
 */

import {
  REQUEST_TOPICS,
  REQUEST_TOPICS_FAILED,
  REQUEST_TOPICS_SUCCEEDED,
  SELECT_TOPIC,
  TOGGLE_DRAWER,
} from './constants';

export const requestTopics = () => ({
  type: REQUEST_TOPICS,
});

export const requestTopicsSucceeded = topics => ({
  type: REQUEST_TOPICS_SUCCEEDED,
  topics,
});

export const requestTopicsFailed = message => ({
  type: REQUEST_TOPICS_FAILED,
  message,
});

export const selectTopic = topic => ({
  type: SELECT_TOPIC,
  topic,
});

export const toggleDrawer = () => ({
  type: TOGGLE_DRAWER,
});
