import React from 'react';

import styles from './Description.module.css';

const Description = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.preview}>
        <p className={styles.text}>
          Reinvigorate your stride with the Nike Air Zoom Pegasus 37. Delivering
          the same fit and feel that runners love, the shoe has an all-new
          forefoot cushioning unit and foam for maximum responsiveness. The
          result is a durable, lightweight trainer designed for everyday
          running.
        </p>
        <ul className={styles.list}>
          <li>Shown: Black/Light Arctic Pink/White/Metallic Red Bronze</li>
          <li>Style: BQ9647-007</li>
        </ul>
        <button>View Product Details</button>
      </div>
      <div className={styles.modal} />
    </div>
  );
};

export default Description;
