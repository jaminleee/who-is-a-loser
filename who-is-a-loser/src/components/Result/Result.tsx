// Result.tsx
import React from "react";
import styles from "./Result.module.scss";
import CommonButton from "../common/Button/commonButton";
import { useNavigate } from "react-router-dom";

interface ResultProps {
  winner: string;
}

const Result: React.FC<ResultProps> = ({ winner }) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // 홈 화면으로 이동
  };
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>하사람은!?!?!?</h2>
        <h1 className={styles.winner}>{winner}!</h1>
      </div>

      <div className={styles.buttonWrapper}>
        {/* 홈으로 가기 버튼 */}
        <CommonButton
          label="홈으로 가기"
          onClick={handleGoHome}
          className={styles.homeButton}
        />
      </div>
    </div>
  );
};

export default Result;
