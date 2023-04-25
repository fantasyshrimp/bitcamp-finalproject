import React from "react";
import styles from "./AboutImage.module.css";

function AboutImage() {
  return (
    <div class={styles.section}>
      <div class={styles.container}>
        <div class={styles.contentSection}>
          <div class={styles.title}>
            <h1>About Artify</h1>
          </div>
          <div class={styles.content}>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div class={styles.imageSection}>
          <img
            src="https://readitquik.com/wp-content/uploads/2022/02/ai-1.gif"
            width="500px"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutImage;
