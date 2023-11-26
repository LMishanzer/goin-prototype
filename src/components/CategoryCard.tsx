import { FC } from "react";
import styles from "./CategoryCard.module.css";

interface CategoryCardProps {
  name: string;
  color: string;
}

export const CategoryCard: FC<CategoryCardProps> = ({ name, color }) => {
  return (
    <div style={{ background: color }} className={styles.categoryCard}>
      {name}
    </div>
  );
};
