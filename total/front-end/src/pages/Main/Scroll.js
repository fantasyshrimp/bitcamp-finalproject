import React from "react";
import styles from "./Scroll.module.css";
import List from "../Feed/List";

function Scroll() {
  return (
    <div>
      <section id={styles.s1}>
        <h1>Animal</h1>
        <a href={`#${styles.s2}`}>Anime로 이동</a>
        <List />
      </section>
      <section id={styles.s2}>
        <h2>Anime</h2>
        <a href="#">top</a>
      </section>
      <section id={styles.s3}>
        <h2>Fashion</h2>
        <a href="#">top</a>
      </section>
      <section id={styles.s4}>
        <h2>Food</h2>
        <a href="#">top</a>
      </section>
      <section id={styles.s5}>
        <h2>Landscapes</h2>
        <a href="#">top</a>
      </section>
      <section id={styles.s6}>
        <h2>Sci-Fi</h2>
        <a href="#">top</a>
      </section>
    </div>
  );
}

export default Scroll;
