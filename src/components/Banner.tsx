import { FC } from "react";
import styles from "./Banner.module.css";

type BannerProps = {
  background: string;
  color: string;
  children?: React.ReactNode;
};

export const Banner: FC<BannerProps> = ({ children, background, color }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 0",
        minHeight: "180px",
        backgroundPosition: "cover",
      }}
      className={styles.banner}
    >
      <div style={{ zIndex: 2 }}>{children}</div>
    </div>
  );
};
