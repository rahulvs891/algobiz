import React from 'react'
import styles from './Home.module.css';
import Header from '../../components/Header/Header';
import Bservices from '../../components/Bservices/Bservices';
import OurFeatures from '../../components/OurFeatures/OurFeatures';
import WhyChoose from '../../components/WhyChoose/WhyChoose';
const Home = () => {
  return (
    <div className={styles}>
      <Header/>
      <Bservices/>
      <OurFeatures/>
      {/* <WhyChoose/> */}
    </div>
  )
}

export default Home
