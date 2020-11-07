import React from 'react';

import styles from './Recommendations.module.css';

const Recommendations = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>YOU MIGHT ALSO LIKE</div>
      <div className={styles.carousel}>
        <div className={styles.card}>
          <a href="">
            <img src="https://ultimate-nike.s3.us-west-1.amazonaws.com/photos/main/regular/1-001.jpg" />
          </a>
          <div className={styles.info}>
            <div className={styles.name}>Nike React Infinity Run Flyknit</div>
            <div className={styles.type}>Women's Running Shoe</div>
            <div className={styles.price}>$160</div>
          </div>
        </div>
        <div className={styles.card}>
          <a href="">
            <img src="https://ultimate-nike.s3.us-west-1.amazonaws.com/photos/main/regular/2-001.jpg" />
          </a>
          <div className={styles.info}>
            <div className={styles.name}>Nike Air Zoom Winflo 7</div>
            <div className={styles.type}>Women's Running Shoe</div>
            <div className={styles.price}>$90</div>
          </div>
        </div>
        <div className={styles.card}>
          <a href="">
            <img src="https://ultimate-nike.s3.us-west-1.amazonaws.com/photos/main/regular/3-001.jpg" />
          </a>
          <div className={styles.info}>
            <div className={styles.name}>Nike React Phantom RUn Flyknit 2 Premium</div>
            <div className={styles.type}>Women's Running Shoe</div>
            <div className={styles.price}>$140</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
