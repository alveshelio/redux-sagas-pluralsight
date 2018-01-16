/**
 *
 * Navigation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';
import AppBar from '../AppBar';
import Drawer from '../Drawer';

function Navigation({ topics, onSelectTopic, onToggleDrawer, isDrawerOpen }) {
  return (
    <div className={styles.navigation}>
      <AppBar toggleDrawerHandler={onToggleDrawer} />
      <Drawer
        items={topics}
        selectedItem={onSelectTopic}
        itemLabelAttr='name'
        itemKeyAttr='name'
        isDrawerOpen={isDrawerOpen}
      />
    </div>
  );
}

Navigation.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onSelectTopic: PropTypes.func.isRequired,
  onToggleDrawer: PropTypes.func.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
};

export default Navigation;
