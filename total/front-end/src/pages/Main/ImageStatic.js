import styles from "./ImageStatic.module.css";

function ImageStatic() {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.imageContainer}>
          <div className={styles.imageBox} id={styles.img1} />
          <div className={styles.imageBox} id={styles.img2} />
          <div className={styles.imageBox} id={styles.img3} />
          <div className={styles.imageBox} id={styles.img4} />
        </div>

        <div className={styles.descContainer}>
          <p className={styles.descBox}>
            Artify 에서 모네 풍의 그림을 손쉽게 그릴 수 있습니다.
          </p>
          <p className={styles.descBox}>
            Artify 로 눈이오는 아름다운 일본 마을의 사진을 생성해 보세요.
          </p>
          <p className={styles.descBox}>
            Artify 는 현실에 존재하지 않는 미래세계 그림도 스스로 창조해 냅니다.
          </p>
          <p className={styles.descBox}>
            Artify 와 함께 동화같은 그림을 내 손으로 직접 만들 수 있습니다.
          </p>
        </div>
      </div>
    </>
  );
}

export default ImageStatic;
