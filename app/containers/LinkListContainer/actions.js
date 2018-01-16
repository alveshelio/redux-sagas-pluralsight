/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINKS_SUCCEEDED,
  REQUEST_LINKS_FAILED,
} from './constants';

export const requestLinksSucceeded = links => ({
  type: REQUEST_LINKS_SUCCEEDED,
  links,
});

export const requestLinksFailed = message => ({
  type: REQUEST_LINKS_FAILED,
  message,
});
