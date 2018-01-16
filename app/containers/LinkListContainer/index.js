/*
 *
 * LinkListContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import selectLinkListContainer from './selectors';
import LinkList from '../../components/LinkList';

export class LinkListContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <LinkList {...this.props} />
    );
  }
}

const mapStateToProps = selectLinkListContainer();

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(LinkListContainer);
