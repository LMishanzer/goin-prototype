import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Button from "@mui/material/Button";
import { FC } from "react";

export const ButtonFilter: FC = () => {
  return (
    <Button>
      <LocationOnOutlinedIcon />
      Location
    </Button>
  );
};
