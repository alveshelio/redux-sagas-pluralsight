/**
*
* AppBar
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import styles from './styles.css';

function AppBar({ toggleDrawerHandler }) {
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
      Code daily
      </div>
      <div className={styles.linkContainer}>
        Login
      </div>
    </div>
  );
}


AppBar.propTypes = {
  toggleDrawerHandler: PropTypes.func.isRequired,
};
export default AppBar;
