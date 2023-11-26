import { FC } from "react";
import { CategoryCard } from "./CategoryCard";
import { Modal, Backdrop, Fade, Box } from "@mui/material";

interface OverlayProps {
  title: string;
  open: boolean;
  onClose: () => void;
}

const categories = [
  { name: "Rock", color: "#509BF5" },
  { name: "Alternative", color: "#283EA3" },
  { name: "Folk", color: "#1E3264" },
  { name: "Punk", color: "#1E3264" },
  { name: "Hip-Hop", color: "#7358FF" },
  { name: "Indie", color: "#B49BC8" },
  { name: "Country", color: "#FF4633" },
  { name: "Funk", color: "#E61D32" },
  { name: "Electronic", color: "#AF2896" },
  { name: "Latin", color: "#E0128B" },
  { name: "Metal", color: "#777777" },
  { name: "Pop", color: "#477D94" },
  { name: "Instrumental", color: "#477D94" },
  { name: "K-Pop", color: "#158A06" },
];

const style = {
  position: "absolute",
  p: 4,
  color: "#fff",
};

export const Overlay: FC<OverlayProps> = ({ title, open, onClose }) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      sx={{
        backdropFilter: "blur(40px)",
        background: "rgba(0,0,0,.5)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <h1
            style={{ textAlign: "center", fontWeight: "600", fontSize: "33px" }}
          >
            {title}
          </h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "flex-start",
              width: "100%",
              gap: "60px 80px",
              marginTop: "100px",
              maxWidth: "1200px",
            }}
          >
            {categories.map((category) => (
              <CategoryCard {...category} />
            ))}
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};
