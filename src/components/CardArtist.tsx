import { ButtonBase, Paper, Typography } from "@mui/material";
import { FC } from "react";
import styles from "./CardArtist.module.css";

type CardArtistProps = {
  name: string;
  img: string;
};

export const CardArtist: FC<CardArtistProps> = ({ name, img }) => {
  const handleClick = () => {};

  return (
    <ButtonBase onClick={handleClick} sx={{ borderRadius: "13px" }}>
      <Paper
        className={styles.card}
        elevation={2}
        sx={{ borderRadius: "13px", overflow: "hidden" }}
      >
        <Typography
          className={styles.blurOverlay}
          fontWeight={600}
          color={"white"}
          component={"div"}
        >
          {name}
        </Typography>
        <img className={styles.image} src={img} />
      </Paper>
    </ButtonBase>
  );
};
