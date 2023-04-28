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
        <div>
          <p className={styles.p}>
            Artify 는 AI 를 이용해 한글로 그림을 생성하는 SNS 서비스입니다.
            <br />
            당신의 소중한 순간을 아름다운 그림으로 표현해 보세요.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
