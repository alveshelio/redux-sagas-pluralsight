/**
 *
 * LinkList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';
import Link from '../Link';

function LinkList({ links, topicName }) {
  let linkNodes = [];
  if (Array.isArray(links)) {
    linkNodes = links.map(l => (
      <Link key={l.id} link={l} />
    ));
  }
  return (
    <div className={styles.linkList}>
      <h1>{topicName}</h1>
      {linkNodes}
    </div>
  );
}

LinkList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  topicName: PropTypes.string.isRequired,
};

export default LinkList;
