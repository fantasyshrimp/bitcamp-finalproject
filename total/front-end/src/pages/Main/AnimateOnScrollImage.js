import React, { useEffect } from "react";
import styles from "./AnimateOnScrollImage.module.css";
import aos from "aos";
import "aos/dist/aos.css";

function AnimateOnScrollImage() {
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
            data-aos="fade-up"
            className={styles.imageBox}
            id={styles.img1}
          />
          <div
            data-aos="fade-up"
            className={styles.imageBox}
            id={styles.img3}
          />
          <div
            data-aos="fade-up"
            className={styles.imageBox}
            id={styles.img2}
          />
        </div>
      </div>
    </>
  );
}

export default AnimateOnScrollImage;
