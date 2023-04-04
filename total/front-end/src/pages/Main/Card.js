import React from "react";
import styles from "./Card.module.css";

function Card() {
  return (
    <div className={styles.total}>
      <div className={styles.container}>
        <div className={styles.card}>
          <img
            src="https://storage.googleapis.com/pai-images/b85f319d074c4a59ba41b38e0e21465d.jpeg"
            alt="AImg"
          />
          <div className={styles.intro}>
            <h1>image title1</h1>
            <p>ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ</p>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="https://storage.googleapis.com/pai-images/3fc14f2b063348ad95f55209876d344f.jpeg"
            alt="AImg"
          />
          <div className={styles.intro}>
            <h1>image title2</h1>
            <p>ABCDEFGHIIIIIIIIIII</p>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="https://storage.googleapis.com/pai-images/59038232dfd8497f9c945645f22b0095.jpeg"
            alt="AImg"
          />
          <div className={styles.intro}>
            <h1>image title3</h1>
            <p>^&&13@#231244@@</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
