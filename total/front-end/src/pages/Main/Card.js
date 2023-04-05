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
