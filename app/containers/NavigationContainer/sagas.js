import axios from 'axios';
import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { REQUEST_TOPICS, SELECT_TOPIC, REQUEST_TOPICS_SUCCEEDED } from './constants';
import { requestTopicsSucceeded, requestTopicsFailed } from './actions';
import selectNavigationContainer from './selectors';

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

function* pushTopic(action) {
  yield put(push(`/topics/${action.topic.name}`));
}

function* selectDefaultTopic() {
  const state = yield (select(selectNavigationContainer()));
  if (state.routerLocation === '/') {
    yield put(push(`/topics/${state.topics[0].name}`));
  }
}

export function* selectDefaultTopicSaga() {
  yield* takeLatest(REQUEST_TOPICS_SUCCEEDED, selectDefaultTopic);
}

export function* selectTopicSaga() {
  yield* takeLatest(SELECT_TOPIC, pushTopic);
}

export function* requestTopicsSaga() {
  yield takeLatest(REQUEST_TOPICS, fetchTopics);
}

// All sagas to be loaded
export default [
  requestTopicsSaga,
  selectTopicSaga,
  selectDefaultTopicSaga,
];
