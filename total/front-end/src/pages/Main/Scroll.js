import React, { useState, useEffect } from "react";
// useState : 요청 상태 관리 (1. 요청의 결과, 2. 로딩 상태, 3. 에러)
// useEffect : 컴포넌트가 렌더링되는 시점에 요청을 시작하는 작업
import styles from "./Scroll.module.css";
//import axios from "axios";

function Scroll() {
  /*
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);


  axios.get("/boards/main/scroll");

  useEffect(() => {
    const fetcherImgs= async() => {
      // 요청이 시작할 때는 error와 img 초기화
      setError(null);
      setImg(null);
      // loading 상태를 true로 변경
      setLoading(true);
      const response = await axios.get()

    }
  })
  */
  return (
    <div>
      <section id={styles.s1}>
        <h1>Animal</h1>
        <a href={`#${styles.s2}`}>Anime로 이동</a>
      </section>
      <section id={styles.s2}>
        <h2>Anime</h2>
        <a href={`#${styles.s3}`}>Fashion 이동</a>
      </section>
      <section id={styles.s3}>
        <h2>Fashion</h2>
        <a href={`#${styles.s4}`}>Food 이동</a>
      </section>
      <section id={styles.s4}>
        <h2>Food</h2>
        <a href={`#${styles.s5}`}>Landscapes 이동</a>
      </section>
      <section id={styles.s5}>
        <h2>Landscapes</h2>
        <a href={`#${styles.s6}`}>Sci-Fi 이동</a>
      </section>
      <section id={styles.s6}>
        <h2>Sci-Fi</h2>
        <a href="#">top</a>
      </section>
    </div>
  );
}

export default Scroll;
