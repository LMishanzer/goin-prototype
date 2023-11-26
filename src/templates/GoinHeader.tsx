import { FC } from "react";
import styles from "./GoinHeader.module.css";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const GoinHeader: FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goForward = () => {
    navigate(1);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent + " content-wrapper"}>
        <div className={styles.navigation}>
          <Button
            sx={{ color: "#fff" }}
            onClick={goBack}
            className={styles.navbutton}
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            sx={{ color: "#fff" }}
            onClick={goForward}
            className={styles.navbutton}
          >
            <ChevronRightIcon />
          </Button>
        </div>
        <div className={styles.logoContainer}>
          <Link className={styles.mainLink} to="/">
            <h1 className={styles.logo}>GOIN</h1>
          </Link>
        </div>
        <div className={styles.options}>
          <Button sx={{ fontWeight: "600" }} color="custom">
            ENG
          </Button>

          <Button sx={{ fontWeight: "600" }} color="custom">
            <img src="/spotify.svg" />
          </Button>
        </div>
      </div>
    </header>
  );
};
