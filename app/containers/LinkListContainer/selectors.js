import { createSelector } from 'reselect';
import selectNavigationContainer from '../NavigationContainer/selectors';

/**
 * Direct selector to the linkListContainer state domain
 */
const selectLinkListContainerDomain = () => state => state.get('linkListContainer');

/**
 * Other specific selectors
 */

const selectRouteTopic = () => (state, props) => props.params.topicName;

const selectTopic = () => createSelector(
  selectNavigationContainer(),
  selectRouteTopic(),
  (navigationState, routeTopicName) => (navigationState.topics.find(t => t.name === routeTopicName) || { name: '' }),
);

/**
 * Default selector used by LinkListContainer
 */

/**
 * Everything returned from this selector will make onto the ListLinkContainer
 * that then will pass it into ListLink
 * @returns {Reselect.Selector<any, any> | Reselect.Selector<any, {routeTopicName: any}>}
 */
const selectLinkListContainer = () => createSelector(
  selectLinkListContainerDomain(),
  selectTopic(),
  (substate, topic) => ({ ...substate.toJS(), topicName: topic.name }),
);

export default selectLinkListContainer;
export {
  selectLinkListContainerDomain,
};
