import React from 'react'
import styles from './OurFeatures.module.css';
import { Icon } from '@iconify/react';
import 'bootstrap/dist/css/bootstrap.min.css';
const OurFeatures = () => {
  return (
    <div className={styles.featuresContainer}>
      <h1 className={styles.featuresTitle}>Our Features</h1>
      <div className={`${styles.supercontainer} row m-0 p-0`}>
       
    <div className='col-12 col-md-6 p-0 d-flex justify-content-center align-items-center order-0 order-md-1'>
      <div className={`${styles.features}`}>
      <div className={styles['hex-container']}>
        <div className={`${styles.hexagon} ${styles['center-hex']}`}></div>
        <div className={styles.hexagon}><div className={styles['hex-content']}><img src='/assets/of-responsive.svg' className={styles.featureImage}/></div></div>
        <div className={styles.hexagon}><div className={styles['hex-content']}><img src='/assets/of-moderncode.svg' className={styles.featureImage}/></div></div>
        <div className={styles.hexagon}><div className={styles['hex-content']}><img src='/assets/of-creative.svg' className={styles.featureImage}/></div></div>
        <div className={styles.hexagon}><div className={styles['hex-content']}><img src='/assets/of-startup.svg' className={styles.featureImage}/></div></div>
        <div className={styles.hexagon}><div className={styles['hex-content']}><img src='/assets/of-business.svg' className={styles.featureImage}/></div></div>
        <div className={styles.hexagon}><div className={styles['hex-content']}><img src='/assets/of-promotion.svg' className={styles.featureImage}/></div></div>
        </div>
      </div>
    </div>
    <div className={`${styles.leftside} col-6 col-md-3 p-0 order-1 order-md-0 `}>
       <div className={styles.leftcontent}>
            <h5>Business startup</h5>
            <p>For a newcomer, we provide complete technical assistance. We provide a one-stop shop for all your needs, from registrations to web needs. Your success is our first priority, and we dedicate ourselves completely to it</p>
          </div>
       <div className={`${styles.leftcontent} ${styles.middleleftcontent}`}>
            <h5>Business compliances</h5>
            <p>When it comes to compliance, our objective is to set the gold standard. All of our work is meticulously inspected to ensure that it meets high standards</p>
          </div>
       <div className={styles.leftcontent}>
            <h5>Business Promotions</h5>
            <p>Get in touch with us for any commercial promos. If you can reach the appropriate audience at the right time, you'll be the winner- that’s exactly what we do. We give the best service</p>
          </div>
    </div>
     <div className={`${styles.rightside} col-6 col-md-3 p-0 order-2 order-md-`}>
          <div className={styles.rightcontent}>
            <h5>Fully Responsive</h5>
            <p>Our creations are fully responsive and well managed. Those will automatically adjust to fit perfectly for different screen sizes and viewports. We are confident that no way it can let you down.</p>
          </div>
          <div className={`${styles.rightcontent} ${styles.middlerightcontent}`}>
            <h5>Modern Code</h5>
            <p>Most contemporary and progressive always offers the finest, we believe. Our works are always created using the newfangled codes and tools</p>
          </div>
          <div className={styles.rightcontent}>
            <h5>Creative Concept</h5>
            <p>Our attention to detail never wavers, and we never compromise. When it comes to being noticed and maintaining supremacy, uniqueness is the key. No one seems to care about comparable ones</p>
          </div>
        </div>
    </div>
    
    </div>
  )
}

export default OurFeatures
