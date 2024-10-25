// ButtonSection.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Style.module.scss";

const ButtonSection: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  const navigate = useNavigate();

  const handleStart = () => {
    onStart();
    navigate("/player-count");
  };

  return (
    <button className={styles.startButton} onClick={handleStart}>
      지금 바로 시작하기
    </button>
  );
};

export default ButtonSection;
