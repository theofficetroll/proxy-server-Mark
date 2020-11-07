import React from 'react';

import styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.carouselWrapper}>
        <div className={styles.carousel}>
          <div className={styles.message}>
            {/* <span>&#8249;</span> */}
            <span>NIKE STATEMENT ON COVID-19</span>
            <a href="">View Here</a>
            {/* <span>&#8250;</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
