import { FC } from "react";
import styles from "./QrCode.module.css";

interface QrCodeProps {
  img: string;
}

export const QrCode: FC<QrCodeProps> = ({ img }) => {
  return (
    <div className={styles.glass}>
      <div className={styles.glassContent}>
        <img src={img} alt="Donation QR code" />
        <span>BUY A BEER FOR US</span>
      </div>
    </div>
  );
};
