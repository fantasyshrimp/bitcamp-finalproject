import React from "react";
import styles from "./Video.module.css";

function Video() {
  return (
    <div id="home" className={styles.home}>
      <video className={styles.video} autoPlay muted loop>
        <source src="video.mp4" type="video/mp4" />
      </video>
      <div className={`${styles.container} ${styles.contain}`}>
        <h1>
          Artify<span>AI</span>가 그려주는 그림
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a href="https://www.naver.com/" className={`${styles.button} button`}>
          Explore Now
        </a>
      </div>
    </div>
  );
}

export default Video;
