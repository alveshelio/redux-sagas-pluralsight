import axios from 'axios';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { REQUEST_TOPICS } from './constants';
import { requestTopicsSucceeded, requestTopicsFailed } from './actions';

// Fetching topics from the server
export const fetchTopicsFromServer = () => axios.get('http://localhost:3000/api/topics')
  .then(response => response.data);

function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);
    yield put(requestTopicsSucceeded(topics));
  } catch (e) {
    yield put(requestTopicsFailed(e.message));
  }
}

// Individual exports for testing
export function* requestTopicsSaga() {
  yield takeLatest(REQUEST_TOPICS, fetchTopics);
}

// All sagas to be loaded
export default [
  requestTopicsSaga,
];
