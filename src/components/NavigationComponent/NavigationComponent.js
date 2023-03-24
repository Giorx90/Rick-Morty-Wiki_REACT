import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavigationComponent.module.scss';
import { Link } from 'react-router-dom';

const NavigationComponent = () => (
  <div className={styles.NavigationComponent}>
    <Link className='nav-link' to="/characters">Characters</Link>
    <Link className='nav-link' to="/locations">Locations</Link>
    <Link className='nav-link' to="/chronology">Chronology</Link>  </div>
);

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;