import React from "react";
import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Outlet />
    </div>
  );
};

export default Layout;
