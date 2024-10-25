// CommonButton.tsx
import React from "react";
import styles from "./Style.module.scss";

interface CommonButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  label,
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      className={`${styles.commonButton} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default CommonButton;
