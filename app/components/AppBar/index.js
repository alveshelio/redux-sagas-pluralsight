/**
 *
 * AppBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

import styles from './styles.css';

function AppBar({ toggleDrawerHandler, email }) {
  const loginLink = email || <Link to='login'>login</Link>;

  return (
    <div className={styles.appBar}>
      <div className={styles.iconButton}>
        <FontAwesome
          className={styles.icon}
          name='bars'
          onClick={toggleDrawerHandler}
        />
      </div>
      <div className={styles.heading}>
        <Link to='/'>Code daily</Link>
      </div>
      <div className={styles.linkContainer}>
        {loginLink}
      </div>
    </div>
  );
}


AppBar.propTypes = {
  toggleDrawerHandler: PropTypes.func.isRequired,
  email: PropTypes.string,
};
export default AppBar;
