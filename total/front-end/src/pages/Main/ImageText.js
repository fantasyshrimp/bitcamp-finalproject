import React, { useEffect, useState } from "react";
import styles from "./ImageText.module.css";
import axios from "axios";

function ImageText() {
  const [no, setNo] = useState([]);
  const [image, setImage] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8080/boards");
        setImage(response.data);
        setContent(response.data.contents);
        // console.log(image);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const randomImage = image[Math.floor(Math.random() * image.length)];

  return (
    <div className={styles.frame}>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <img
            src="https://mblogthumb-phinf.pstatic.net/MjAxODA4MzBfMjk4/MDAxNTM1NjAzMTUyNTI0.kgeS9UFSzHacn4u4YdlYIPqGS69NuUGL2Wyn4fvGw1Yg.nPvY3FQ0lebPg9XQtL-PAJRgqPKnpYD7wvC15A1ZTy4g.JPEG.didim365_/000.jpg?type=w800"
            className={styles.img}
            alt=""
          />

          <h2 className={styles.h2}>
            단 몇 초면 그림 뚝딱…한달만에 100만장 그린 'AI 화가'의 정체
          </h2>
          <p className={styles.p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageText;
