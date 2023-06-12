import React from 'react';
import styles from './WhyChoose.module.css';
import { Icon } from '@iconify/react';
import 'bootstrap/dist/css/bootstrap.min.css';

const WhyChoose = () => {
  return (
    <>
    <div className={`${styles.whychooseContainer} row p-0 my-5 mx-0`}>
        <div className={`${styles.whychooseDetails} col-6 p-0`}>
            <img src='/assets/logo-light.svg' className={styles.backgroundLogo}/>
            <div className={styles.whychooseAbout}>
            <h3>Why Choose Algobiz</h3>
            <p>We are a one-stop shop for your business needs, whether it's to register your business or for growing it. Our professionally designed works are a cut above the rest. We help you take a big leap forward in your business.</p>
            </div>
        </div>
        <div className={`${styles.whychooseContent} col-6 p-0`}>
          <div className='d-flex flex-column mt-5'>
              <div className={styles.whychooseItem}>
                  <img src='/assets/wca1.png' className={styles.overlay}/>
                    <div className={styles.content}>
                      <h2 className={styles.titlecontent}>Creative Design</h2>
                      <p className={styles.expandcontent}>Our passionate team builds the best that stands out from the crowd</p>
                    </div>
              </div>
              <div className={styles.whychooseItem}>
                  <img src='/assets/wca2.png' className={styles.overlay}/>
                    <div className={styles.content}>
                      <h2 className={styles.titlecontent}>Lifetime Support</h2>
                      <p className={styles.expandcontent}>We stay with you through out your journey as a companion</p>
                    </div>
              </div>
            </div>
            <div className='d-flex flex-column '>
            <div className={styles.whychooseItem}>
                <img src='/assets/wca3.png' className={styles.overlay}/>
                  <div className={styles.content}>
                    <h2 className={styles.titlecontent}>Innovative Services</h2>
                    <p className={styles.expandcontent}>Being unique yields excellent results that's our belief</p>
                  </div>
            </div>
            <div className={styles.whychooseItem}>
                <img src='/assets/wca4.png' className={styles.overlay}/>
                  <div className={styles.content}>
                    <h2 className={styles.titlecontent}>DIgital Marketing</h2>
                    <p className={styles.expandcontent}>Showcase your work to the world with us, make your empire bigger</p>
                  </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default WhyChoose
