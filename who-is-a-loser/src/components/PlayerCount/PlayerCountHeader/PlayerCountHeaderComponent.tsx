// HeaderSection.tsx
import React from "react";
import styles from "./Style.module.scss";

interface HeaderSectionProps {
  count: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PlayerCountHeaderComponent: React.FC<HeaderSectionProps> = ({
  count,
  onInputChange,
}) => {
  return (
    <div className={styles.header}>
      <div>
        <div className={styles.questionNumText}>Q1.</div>
        <div className={styles.questionText}>
          하사람 후보자의 <br /> 총 인원수를 알려주세요
        </div>
      </div>

      <div className={styles.rowContent}>
        <input
          className={styles.inputCount}
          type="text"
          value={count}
          onChange={onInputChange}
        />
        명
      </div>
    </div>
  );
};

export default PlayerCountHeaderComponent;
