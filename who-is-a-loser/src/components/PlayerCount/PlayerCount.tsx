import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PlayerCount.module.scss";

interface PlayerCountProps {
  onNext: (count: number) => void;
}

const PlayerCount: React.FC<PlayerCountProps> = ({ onNext }) => {
  const [count, setCount] = useState<string>(""); // 초기값을 빈 문자열로 설정
  const navigate = useNavigate();

  const handleNext = () => {
    const parsedCount = parseInt(count, 10);
    if (!isNaN(parsedCount) && parsedCount > 0) {
      onNext(parsedCount);
      navigate("/player-name"); // 플레이어 이름 입력 화면으로 이동
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // 숫자 또는 빈 문자열일 때만 상태 업데이트
    if (value === "" || /^\d+$/.test(value)) {
      setCount(value);
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.questionNumText}>Q1.</div>
      <div className={styles.questionText}>
        하사람 후보자의 <br /> 총 인원수를 알려주세요
      </div>
      <div className={styles.rowContent}>
        <input
          className={styles.inputCount}
          type="text" // number 대신 text로 변경하여 빈 문자열 허용
          value={count}
          onChange={handleInputChange}
        />
        명
      </div>
      <button
        className={styles.nextButton}
        onClick={handleNext}
        disabled={count === "" || parseInt(count, 10) <= 0} // 유효한 값이 아닐 때 버튼 비활성화
      >
        다음
      </button>
    </div>
  );
};

export default PlayerCount;
