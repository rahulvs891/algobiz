import React,{useState} from 'react';
import styles from './Bservices.module.css';
const Bservices = () => {
    const [expandedIndex, setExpandedIndex] = useState(1);

  const handleBoxClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className={styles.bServicesContainer}>
      {expandedIndex!=null &&
    <div className={styles.serviceDetailsContainer}>
        {expandedIndex===0 && <div className={styles.serviceDetails}>
            <h3>
            Create.<br/>Imagine.<br/>Transform.
            </h3>
            <button>Go</button>
            </div>}
        {expandedIndex===1 && <div className={styles.serviceDetails}>
            <h3>
            Conceptualize.<br/>Innovate.<br/>Appify.
            </h3>
            <button>Go</button>
            </div>}
        {expandedIndex===2 && <div className={styles.serviceDetails}>
            <h3>
            Establish. <br/>Empower. <br/>Succeed.
            </h3>
            <button>Go</button>
            </div>}
        {expandedIndex===3 && <div className={styles.serviceDetails}>
            <h3>
            Strategize. <br/>Thrive. <br/>Lead.
            </h3>
            <button>Go</button>
            </div>}
    </div>
    }
    <div className={styles.bServices}>
      <div
        className={`${styles.serviceBox} ${styles.serviceBox1} ${expandedIndex === 0 ? styles.serviceExpanded : ''}`}
        onClick={() => handleBoxClick(0)} 
      >
        <h3>Web Development</h3>
      </div>
      <div
        className={`${styles.serviceBox} ${styles.serviceBox2} ${expandedIndex === 1 ? styles.serviceExpanded : ''}`}
        onClick={() => handleBoxClick(1)}
      >
        <h3>App Development</h3>
      </div>
      <div
        className={`${styles.serviceBox} ${styles.serviceBox3} ${expandedIndex === 2 ? styles.serviceExpanded : ''}`}
        onClick={() => handleBoxClick(2)}
      >
        <h3>Company registration</h3>
      </div>
      <div
        className={`${styles.serviceBox} ${styles.serviceBox4} ${expandedIndex === 3 ? styles.serviceExpanded : ''}`}
        onClick={() => handleBoxClick(3)}
      >
        <h3>Business solutions</h3>
      </div>
        </div>
    </div>
  );
}

export default Bservices
