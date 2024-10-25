import React from "react";
import styles from "./Style.module.scss";
import backgroundImage from "../../assets/background-image.png";
import TitleSection from "../../components/Main/TitleSection/TitleSection";
import ButtonSection from "../../components/Main/ButtonSection/ButtonSection";

const MainScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <>
      <div
        className={styles.MainScreen}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* ----- titleSection ------ */}
        <TitleSection />
        {/* ------- Button Section ------- */}
        <ButtonSection onStart={onStart} />
      </div>
    </>
  );
};

export default MainScreen;
