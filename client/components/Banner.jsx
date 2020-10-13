import React from 'react';

import styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.carouselWrapper}>
        <div className={styles.carousel}>
          {' '}
          &#8249; NIKE STATEMENT ON COVID-19 View Here &#8250;
        </div>
      </div>
    </div>
  );
};

export default Banner;
