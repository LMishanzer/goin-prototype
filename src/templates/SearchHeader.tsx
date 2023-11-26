import { FC, useState } from "react";
import styles from "./GoinHeader.module.css";
import { Button } from "@mui/material";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import hStyles from "./Header.module.css";

export const SearchHeader: FC<SearchHeaderParams> = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string>(
    searchParams.get("query") ?? ""
  );

  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  const goForward = () => {
    navigate(1);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent + " content-wrapper"}>
        <div className={styles.logoContainer}>
          <Link className={styles.mainLink} to="/">
            <h1 className={styles.logo}>GOIN</h1>
          </Link>
        </div>
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

          <section>
            <input
              placeholder="Search for artist, event, genre..."
              className={hStyles.searchInput}
              value={searchQuery}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          </section>
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
