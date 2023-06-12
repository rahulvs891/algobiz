import React from 'react';
import styles from './About.module.css';
import Navigation from '../../components/Navigation/Navigation';
const About = () => {
  return (
    <div className={styles}>
      <Navigation/>
      <h1>This is About</h1>
    </div>
  )
}

export default About
