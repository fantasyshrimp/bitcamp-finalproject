import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import axios from "axios";

function Card() {
  const [no, setNo] = useState([]);
  const [image, setImage] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8080/boards");
        setImage(response.data);
        setContent(response.data.contents);
        console.log(image);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const randomImage = image[Math.floor(Math.random() * image.length)];
  // Math.random() 함수를 이용하여 0부터 배열의 길이 -1까지 랜덤한 정수를 구하고,
  // 해당 인덱스의 이미지 선택
  // 또한 이미지가 선택되었을 때만 해당 이미지를 렌더링하도록 함

  return (
    <div className={styles.total}>
      <div className={styles.container}>
        {randomImage && (
          <div className={styles.card}>
            <img src={randomImage.fileName} />
            <div className={styles.intro}>
              {/* <p>{content[boardNo]}</p> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
