import { FC, useState } from "react";
import styles from "./LeftFilter.module.css";
import { Overlay } from "./Overlay";
import { Button, Stack } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

interface LeftFilterInterface {
    setFilter: (filter: string) => void
}

export const LeftFilter: FC<LeftFilterInterface> = ({setFilter}) => {
  // categories
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.leftFilter}>
      <ul className={styles.filters}>
        <li>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2A334A",
              minWidth: "50px",
              minHeight: "50px",
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
            </Stack>
          </Button>
        </li>
        <li>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2A334A",
              minWidth: "50px",
              minHeight: "50px",
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
            </Stack>
          </Button>
        </li>
        <li>
          <Button
            onClick={handleOpen}
            variant="contained"
            sx={{
              backgroundColor: "#2A334A",
              minWidth: "50px",
              minHeight: "50px",
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
            </Stack>
          </Button>
        </li>
        <li>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2A334A",
              minWidth: "50px",
              minHeight: "50px",
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
            </Stack>
          </Button>
        </li>
      </ul>

      <Overlay open={open} onClose={handleClose} title={"CHOOSE CATEGORY"} setCategory={setFilter} />
    </div>
  );
};
