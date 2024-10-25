import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Question.module.scss";

interface QuestionProps {
  question: string;
  players: string[];
  onVote: (index: number) => void;
  isLastQuestion: boolean;
  currentRound: number;
  totalRounds: number;
}

const Question: React.FC<QuestionProps> = ({
  question,
  players,
  onVote,
  isLastQuestion = false,
  currentRound,
  totalRounds,
}) => {
  const navigate = useNavigate();
  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    console.log(`Current progress: ${(currentRound / totalRounds) * 100}%`);
  }, [currentRound, totalRounds]);

  const handleVote = () => {
    if (selectedPlayerIndex !== null) {
      onVote(selectedPlayerIndex);

      // 마지막 질문이면 결과 화면으로 이동
      if (isLastQuestion) {
        navigate("/result");
      }

      // 다음 라운드를 위해 selectedPlayerIndex를 초기화
      setSelectedPlayerIndex(null);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.progressBarContainer}>
        <div
          className={styles.progressBar}
          style={{
            width: `${(currentRound / totalRounds) * 100}%`, // 진행률을 백분율로 설정
          }}
        ></div>
      </div>

      <h2 className={styles.questionText}>
        질문: {question || "질문을 불러오는 중입니다..."}
      </h2>
      <p>해당하는 사람을 선택하세요:</p>
      <div className={styles.buttonGrid}>
        {players.map((player, index) => (
          <button
            className={styles.nameButton}
            key={index}
            onClick={() => setSelectedPlayerIndex(index)}
            style={{
              backgroundColor:
                selectedPlayerIndex === index ? "lightblue" : "white",
            }}
          >
            {player}
          </button>
        ))}
      </div>
      <button
        className={styles.nextButton}
        onClick={handleVote}
        disabled={selectedPlayerIndex === null}
      >
        다음
      </button>
    </div>
  );
};

export default Question;
