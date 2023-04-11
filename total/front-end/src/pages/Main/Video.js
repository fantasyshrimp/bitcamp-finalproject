import React from "react";
import styles from "./Video.module.css";

function Video(props) {
  const handleShowLogin = (e) => {
    e.preventDefault();
    props.setLoginShow(true);
  };

  return (
    <div className={styles.frame}>
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
        <a
          href="/"
          className={`${styles.button} button`}
          onClick={handleShowLogin}
        >
          ?클릭 시 로그인 모달 띄우기?
        </a>
      </div>
    </div>
  );
}

export default Video;
