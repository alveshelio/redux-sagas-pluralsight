/*
 *
 * NavigationContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import selectNavigationContainer from './selectors';
import Navigation from '../../components/Navigation';
import { requestTopics, requestTopicsSucceeded, requestTopicsFailed, selectTopic, toggleDrawer } from './actions';

export class NavigationContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onRequestTopics();
  }
  render() {
    return (
      <Navigation {...this.props} />
    );
  }
}

const mapStateToProps = selectNavigationContainer();

const mapDispatchToProps = dispatch => ({
  onRequestTopics: () => dispatch(requestTopics()),
  onRequestTopicsSucceeded: topics => dispatch(requestTopicsSucceeded(topics)),
  onRequestTopicsFailed: message => dispatch(requestTopicsFailed(message)),
  onSelectTopic: topic => dispatch(selectTopic(topic)),
  onToggleDrawer: () => dispatch(toggleDrawer()),
});

NavigationContainer.propTypes = {
  onRequestTopics: PropTypes.func.isRequired,
  onRequestTopicsSucceeded: PropTypes.func.isRequired,
  onRequestTopicsFailed: PropTypes.func.isRequired,
  onSelectTopic: PropTypes.func.isRequired,
  onToggleDrawer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
