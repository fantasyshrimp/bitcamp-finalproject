import React from "react";
import styles from "./Video.module.css";

function Video(props) {
  // const handleShowLogin = (e) => {
  //   e.preventDefault();
  //   props.setLoginShow(true);
  // };

  return (
    <div className={styles.frame}>
      <video className={styles.video} autoPlay muted loop>
        <source src="smoothvideo.mp4" type="video/mp4" />
      </video>
      <div className={styles.container}>
        <h1 className={styles.h1}>
          <span className={styles.span}>Artify</span>
        </h1>
        <p className={styles.p}>
          Artify 는 한글로 그림을 그려주는, SNS 와 AI 를 결합한 서비스 입니다.{" "}
          <br />
          당신의 일상을 그림으로 만들어 보세요.
        </p>
      </div>
    </div>
  );
}

export default Video;
