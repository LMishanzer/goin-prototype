import { FC } from "react";
import { Button, styled } from "@mui/material";

interface CategoryCardProps {
  name: string;
  color: string;
}

export const CardButton = styled(Button)({
  color: "#fff",
  fontWeight: "800",
  borderRadius: "22px",
  outline: "thin solid rgba(255, 255, 255, .7)",
  minWidth: "170px",
  minHeight: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const CategoryCard: FC<CategoryCardProps> = ({ name, color }) => {
  return <CardButton style={{ background: color }}>{name}</CardButton>;
};
