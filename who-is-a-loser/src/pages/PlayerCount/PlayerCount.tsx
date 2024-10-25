import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Style.module.scss";
import PlayerCountHeaderComponent from "../../components/PlayerCount/PlayerCountHeader/PlayerCountHeaderComponent";
import PlayerCountButtonComponent from "../../components/PlayerCount/PlayerCountButton/PlayerCountButtonComponent";

interface PlayerCountProps {
  onNext: (count: number) => void;
}

const PlayerCountScreen: React.FC<PlayerCountProps> = ({ onNext }) => {
  const [count, setCount] = useState<string>("");
  const navigate = useNavigate();

  const handleNext = () => {
    const parsedCount = parseInt(count, 10);
    if (!isNaN(parsedCount) && parsedCount > 0) {
      onNext(parsedCount);
      navigate("/player-name");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setCount(value);
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* --------- Header Section --------- */}
      <PlayerCountHeaderComponent
        count={count}
        onInputChange={handleInputChange}
      />
      {/* --------- Button Section --------- */}
      <PlayerCountButtonComponent
        onNext={handleNext}
        isDisabled={count === "" || parseInt(count, 10) <= 0}
      />
    </div>
  );
};

export default PlayerCountScreen;
