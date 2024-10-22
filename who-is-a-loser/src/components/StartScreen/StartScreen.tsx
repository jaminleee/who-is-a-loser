import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./StartScreen.module.scss";

const StartScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  const navigate = useNavigate(); // navigate 훅 사용

  const handleStart = () => {
    onStart(); // 플레이어 수 설정
    navigate("/player-count"); // 다음 화면으로 이동
  };

  return (
    <div className={styles.startScreen}>
      <div className={styles.content}>
        <h1>만나서 반가워요 :)</h1>
        <p>
          오늘의 <strong>하사람</strong>은 누구일까요?
        </p>
        <button className={styles.startButton} onClick={handleStart}>
          지금 바로 시작하기
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
