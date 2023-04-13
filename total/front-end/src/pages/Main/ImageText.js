import React from "react";
import styles from "./ImageText.module.css";

function ImageText() {
  <div className={styles.frame}>
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <img
          src="https://imgnews.pstatic.net/image/008/2023/04/10/0004873083_001_20230410154403052.jpg?type=w647"
          className={styles.img}
          alt=""
        />
        <img
          src="https://blog.kakaocdn.net/dn/bezjux/btqCX8fuOPX/6uq138en4osoKRq9rtbEG0/img.jpg"
          alt=""
        ></img>

        <h2 className={styles.h2}>
          단 몇 초면 그림 뚝딱…한달만에 100만장 그린 'AI 화가'의 정체
        </h2>
        <p className={styles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  </div>;
}

export default ImageText;
