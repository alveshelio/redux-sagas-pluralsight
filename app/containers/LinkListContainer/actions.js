/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINKS_SUCCEEDED,
  REQUEST_LINKS_FAILED,
  REQUEST_LINKS,
} from './constants';

export const requestLinks = topicName => ({
  type: REQUEST_LINKS,
  topicName,
});

export const requestLinksSucceeded = links => ({
  type: REQUEST_LINKS_SUCCEEDED,
  links,
});

export const requestLinksFailed = message => ({
  type: REQUEST_LINKS_FAILED,
  message,
});
