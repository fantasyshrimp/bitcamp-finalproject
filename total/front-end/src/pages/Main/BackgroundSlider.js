import styles from "./BackgroundSlider.module.css";
import imageSlide from "./data";
import { useEffect, useState } from "react";

const BackgroundSlider = () => {
  const [currentStage, setCurrentStage] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStage === 2) {
        setCurrentStage(0);
      } else {
        setCurrentStage(currentStage + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentStage]);
  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentStage].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
  };

  const goToNext = (currentStage) => {
    setCurrentStage(currentStage);
  };

  return (
    <div className={styles.containerStyle}>
      <div style={bgImageStyle}></div>
      <div className={styles.transparentBackground}></div>
      <div className={styles.description}>
        <div>
          <h1>{imageSlide[currentStage].title}</h1>
          <p>{imageSlide[currentStage].body}</p>
        </div>
        <div className={styles.carouselBoulltin}>
          {imageSlide.map((imageSlide, currentStage) => (
            <span
              key={currentStage}
              onClick={() => goToNext(currentStage)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackgroundSlider;
