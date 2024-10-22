import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h2>참가자 이름을 입력하세요:</h2>
      {names.map((name, index) => (
        <input
          key={index}
          type="text"
          placeholder={`참가자 ${index + 1}`}
          value={name}
          onChange={(e) => handleNameChange(index, e.target.value)}
        />
      ))}
      <button onClick={handleNamesSubmit}>다음</button>
    </div>
  );
};

export default PlayerName;
