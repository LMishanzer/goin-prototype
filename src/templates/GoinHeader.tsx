import { FC } from "react";
import styles from "./GoinHeader.module.css";

export const GoinHeader: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navigation}>
        <a href="javascript:history.back()" className={styles.navbutton}>
          &#8249;
        </a>
        <a href="javascript:history.forward()" className={styles.navbutton}>
          &#8250;
        </a>
      </div>
      <div className={styles.logoContainer}>
        <h1 className={styles.logo}>GOIN</h1>
      </div>
      <div className={styles.options}>
        <p>ENG</p>
        <img src="/spotify.svg" />
      </div>
    </header>
  );
};
