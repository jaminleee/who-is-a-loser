import React from "react";
import styles from "./Style.module.scss";

const TitleSection: React.FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.startText}>
        만나서 반가워요 :)
        <br />
        오늘의 <strong>하사람</strong>은 누구일까요?
      </div>
    </div>
  );
};

export default TitleSection;
