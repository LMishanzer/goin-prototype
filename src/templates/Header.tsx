import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Button, Stack } from "@mui/material";
import { FC, useState } from "react";
import styles from "./Header.module.css";
import React from "react";
import { Overlay } from "../components/Overlay";
import { useNavigate } from "react-router-dom";

export const Header: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // categories
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    console.log(`Performing search for: ${query}`);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch(searchQuery);
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className={styles.header}>
      <div className="content-wrapper">
        <div className={styles.menu}>
          <h1 className={styles.logo}>GOIN</h1>
          <nav>
            <ul className={styles.navItems}>
              <li>
                <Button sx={{ fontWeight: "600" }} color="custom">
                  ENG
                </Button>
              </li>
              <li>
                <Button sx={{ fontWeight: "600" }} color="custom">
                  <img src="/spotify.svg" />
                </Button>
              </li>
            </ul>
          </nav>
        </div>

        <section>
          <input
            placeholder="Search for artist, event, genre..."
            className={styles.searchInput}
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </section>

        <section className={styles.searchFilters}>
          <ul className={styles.filters}>
            <li>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#2A334A",
                  minWidth: "115px",
                  minHeight: "115px",
                  borderRadius: "22px",
                }}
              >
                <Stack
                  direction={"column"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gap={"10px"}
                >
                  <LocationOnOutlinedIcon />
                  Location
                </Stack>
              </Button>
            </li>
            <li>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#2A334A",

                  minWidth: "115px",
                  minHeight: "115px",
                  borderRadius: "22px",
                }}
              >
                <Stack
                  direction={"column"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gap={"10px"}
                >
                  <CalendarTodayOutlinedIcon />
                  DATE
                </Stack>
              </Button>
            </li>
            <li>
              <Button
                onClick={handleOpen}
                variant="contained"
                sx={{
                  backgroundColor: "#2A334A",
                  minWidth: "115px",
                  minHeight: "115px",
                  borderRadius: "22px",
                }}
              >
                <Stack
                  direction={"column"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gap={"10px"}
                >
                  <LibraryMusicOutlinedIcon />
                  GENRE
                </Stack>
              </Button>
            </li>
            <li>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#2A334A",
                  minWidth: "115px",
                  minHeight: "115px",
                  borderRadius: "22px",
                }}
              >
                <Stack
                  direction={"column"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gap={"10px"}
                >
                  <PersonOutlineOutlinedIcon />
                  ARTIST
                </Stack>
              </Button>
            </li>
          </ul>
        </section>
      </div>

      <Overlay open={open} onClose={handleClose} title={"CHOOSE CATEGORY"} />
    </header>
  );
};
