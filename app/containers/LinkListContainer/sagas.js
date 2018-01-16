import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import { SELECT_TOPIC } from '../NavigationContainer/constants';
import { requestLinksSucceeded, requestLinksFailed } from './actions';

const fetchLinksFromServer = topic => axios.get(`http://localhost:3000/api/topics/${topic.name}/links`)
  .then(response => response.data);

function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topic);
    // dispatch an action to store links
    yield put(requestLinksSucceeded(links));
  } catch (e) {
    // dispatch action to store error
    yield put(requestLinksFailed(e.message));
  }
}

// Individual exports for testing
export function* linkListSaga() {
  yield* takeLatest(SELECT_TOPIC, fetchLinks);
}

// All sagas to be loaded
export default [
  linkListSaga,
];
