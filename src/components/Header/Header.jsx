import React from 'react';
import styles from './Header.module.css';
import Navigation from '../Navigation/Navigation';
const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Navigation/>
      <h1 className={styles.title}>ALGOBIZ</h1>
    </div>
  )
}

export default Header
