import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface QuestionProps {
  question: string;
  players: string[];
  onVote: (index: number) => void;
  isLastQuestion: boolean;
}

const Question: React.FC<QuestionProps> = ({
  question,
  players,
  onVote,
  isLastQuestion = false,
}) => {
  const navigate = useNavigate();
  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState<number | null>(
    null
  );

  const handleVote = () => {
    if (selectedPlayerIndex !== null) {
      onVote(selectedPlayerIndex);
      console.log("Vote registered for player index:", selectedPlayerIndex);

      // 마지막 질문이면 결과 화면으로 이동
      if (isLastQuestion) {
        console.log("Navigating to /result...");
        navigate("/result");
      } else {
        console.log("Not the last question yet");
      }

      // 다음 라운드를 위해 selectedPlayerIndex를 초기화
      setSelectedPlayerIndex(null);
    }
  };

  return (
    <div>
      <h2>질문: {question || "질문을 불러오는 중입니다..."}</h2>
      <p>해당하는 사람을 선택하세요:</p>
      {players.map((player, index) => (
        <button
          key={index}
          onClick={() => {
            setSelectedPlayerIndex(index); // 클릭한 플레이어의 인덱스를 저장
            console.log("Player selected:", player, "Index:", index); // 선택한 플레이어 확인
          }}
          style={{
            backgroundColor:
              selectedPlayerIndex === index ? "lightblue" : "white",
          }}
        >
          {player}
        </button>
      ))}

      <br />
      <button
        onClick={handleVote}
        disabled={selectedPlayerIndex === null} // 플레이어를 선택하지 않으면 버튼 비활성화
      >
        다음
      </button>
    </div>
  );
};

export default Question;
