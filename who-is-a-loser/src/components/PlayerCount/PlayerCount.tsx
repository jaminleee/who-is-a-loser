import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface PlayerCountProps {
  onNext: (count: number) => void;
}

const PlayerCount: React.FC<PlayerCountProps> = ({ onNext }) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    onNext(count);
    navigate("/player-name"); // 플레이어 이름 입력 화면으로 이동
  };

  return (
    <div>
      <h2>게임에 참여할 인원 수를 입력하세요:</h2>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button onClick={handleNext}>다음</button>
    </div>
  );
};

export default PlayerCount;
