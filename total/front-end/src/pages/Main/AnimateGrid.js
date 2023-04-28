import React, { useEffect } from "react";
import styles from "./AnimateGrid.module.css";
import aos from "aos";
import "aos/dist/aos.css";

function AnimateGrid() {
  useEffect(() => {
    aos.init({
      duration: 500,
    });
  });

  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div
            data-aos="zoom-out-right"
            className={styles.imageBox}
            id={styles.img1}
          />
          <div
            data-aos="flip-left"
            className={styles.imageBox}
            id={styles.img2}
          />
          <div className={styles.imageBox} id={styles.img3} />
          <div className={styles.imageBox} />
          <div
            data-aos="fade-left"
            className={styles.imageBox}
            id={styles.img4}
          />

          <div className={styles.imageBox} />
          <div className={styles.imageBox} id={styles.img5} />
          <div
            data-aos="zoom-out"
            className={styles.imageBox}
            id={styles.img6}
          />
          <div
            data-aos="zoom-in"
            className={styles.imageBox}
            id={styles.img7}
          />
          <div className={styles.imageBox} id={styles.img8} />

          <div
            data-aos="fade-right"
            className={styles.imageBox}
            id={styles.img9}
          />
          <div className={styles.imageBox} id={styles.img10} />
          <div className={styles.imageBox} />
          <div
            data-aos="fade-down-right"
            className={styles.imageBox}
            id={styles.img11}
          />
          <div
            data-aos="flip-right"
            className={styles.imageBox}
            id={styles.img12}
          />

          <div className={styles.imageBox} id={styles.img13} />
          <div className={styles.imageBox} />
          <div
            data-aos="zoom-in-down"
            className={styles.imageBox}
            id={styles.img14}
          />
          <div className={styles.imageBox} id={styles.img15} />
          <div
            data-aos="fade-up-left"
            className={styles.imageBox}
            id={styles.img16}
          />

          <div
            data-aos="zoom-out-right"
            className={styles.imageBox}
            id={styles.img17}
          />
          <div className={styles.imageBox} id={styles.img18} />
          <div
            data-aos="flip-up"
            className={styles.imageBox}
            id={styles.img19}
          />
          <div className={styles.imageBox} id={styles.img20} />
          <div className={styles.imageBox} />
        </div>
      </div>
    </>
  );
}

export default AnimateGrid;
