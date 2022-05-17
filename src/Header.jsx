import React from "react";
import styles from "./Header.module.css";
import { BsBag } from "react-icons/bs";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_text}>Intocode Coding Shopcamp</div>
        <BsBag className={styles.header_bag}/>
    </div>
  );
};

export default Header;
