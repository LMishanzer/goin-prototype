import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { ButtonBase, Paper, Typography } from "@mui/material";
import { FC } from "react";
import styles from "./CardArtist.module.css";

type CardEventProps = {
  name: string;
  img: string;
  location: string;
  date: Date;
};

export const CardEvent: FC<CardEventProps> = ({
  name,
  img,
  location,
  date,
}) => {
  const handleClick = () => {};

  return (
    <ButtonBase onClick={handleClick} sx={{ borderRadius: "13px" }}>
      <div>
        <Paper
          className={styles.card}
          elevation={2}
          sx={{
            borderRadius: "13px",
            overflow: "hideen",
          }}
        >
          <ul className={styles.eventBlurOverlay}>
            <Typography fontWeight={600} color={"white"} component={"li"}>
              {name}
            </Typography>

            <Typography
              className={styles.location}
              fontWeight={600}
              color={"white"}
              component={"li"}
            >
              <LocationOnOutlinedIcon fontSize="small" />

              {location}
            </Typography>
          </ul>

          <img className={styles.image} src={img} />
        </Paper>

        <Typography
          className={styles.date}
          fontWeight={600}
          color={"white"}
          component={"div"}
          borderRadius={"13px"}
          padding={"15px"}
        >
          {date.toLocaleDateString("en-EN") +
            ` [${date.toLocaleDateString("en-EN", {
              weekday: "long",
            })}]`}
        </Typography>
      </div>
    </ButtonBase>
  );
};
