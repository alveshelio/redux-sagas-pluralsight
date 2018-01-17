/*
 *
 * LinkListContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { requestLinks } from './actions';
import selectLinkListContainer from './selectors';
import LinkList from '../../components/LinkList';

export class LinkListContainer extends React.Component {
  componentWillMount() {
    this.props.requestLinks(this.props.topicName);
  }

  /**
   * if routeTopicName is updated, we need to refetch the links
   * so we use componentWillReceiveProps()
   * @param nextProps
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.topicName !== this.props.topicName) {
      this.props.requestLinks(nextProps.topicName);
    }
  }
  render() {
    return (
      <LinkList {...this.props} />
    );
  }
}

LinkListContainer.propTypes = {
  requestLinks: PropTypes.func.isRequired,
  topicName: PropTypes.string.isRequired,
};

const mapStateToProps = selectLinkListContainer();

const mapDispatchToProps = dispatch => ({
  requestLinks: topicName => dispatch(requestLinks(topicName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LinkListContainer);
