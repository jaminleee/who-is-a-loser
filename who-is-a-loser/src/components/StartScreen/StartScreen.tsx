import React from "react";
import styles from "./StartScreen.module.scss";
import backgroundImage from "../../assets/background-image.png"; // 이미지 경로 설정

const StartScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <div
      className={styles.startScreen}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.content}>
        <div className={styles.startText}>
          만나서 반가워요 :) <br></br>오늘의 <strong>하사람</strong>은
          누구일까요?
        </div>
        <p className={styles.startText}></p>
        <button className={styles.startButton} onClick={onStart}>
          지금 바로 시작하기
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
