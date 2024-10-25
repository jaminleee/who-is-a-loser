import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PlayerName.module.scss"; // SCSS 파일을 import

interface PlayerNameProps {
  playerCount: number;
  onNamesSubmit: (names: string[]) => void;
}

const PlayerName: React.FC<PlayerNameProps> = ({
  playerCount,
  onNamesSubmit,
}) => {
  const [names, setNames] = useState<string[]>(Array(playerCount).fill(""));
  const navigate = useNavigate();

  const handleNamesSubmit = () => {
    onNamesSubmit(names);
    navigate("/questions"); // 질문 화면으로 이동
  };

  const handleNameChange = (index: number, value: string) => {
    const newNames = [...names];
    newNames[index] = value;
    setNames(newNames);
  };

  return (
    <div className={styles.container}>
      <div className={styles.questionNumText}>Q2</div>
      <div className={styles.questionText}>
        하사람 후보자의<br></br>이름을 입력해 주세요
      </div>
      <div className={styles.inputGrid}>
        {names.map((name, index) => (
          <input
            className={styles.inputName}
            key={index}
            type="text"
            placeholder={`참가자 ${index + 1}`}
            value={name}
            onChange={(e) => handleNameChange(index, e.target.value)}
          />
        ))}
      </div>
      <button className={styles.nextButton} onClick={handleNamesSubmit}>
        다음
      </button>
    </div>
  );
};

export default PlayerName;
