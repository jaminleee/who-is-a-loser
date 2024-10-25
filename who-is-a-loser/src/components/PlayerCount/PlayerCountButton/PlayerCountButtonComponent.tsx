// ButtonSection.tsx
import React from "react";
import styles from "./Style.module.scss";

interface ButtonSectionProps {
  onNext: () => void;
  isDisabled: boolean;
}

const PlayerCountButtonComponent: React.FC<ButtonSectionProps> = ({
  onNext,
  isDisabled,
}) => {
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={styles.nextButton}
        onClick={onNext}
        disabled={isDisabled}
      >
        다음
      </button>
    </div>
  );
};

export default PlayerCountButtonComponent;
