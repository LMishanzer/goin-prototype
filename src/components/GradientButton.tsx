// import { FC } from "react";

import { Button, styled } from "@mui/material";

// interface GradientButtonProps {
//   title: string;
//   actionName: string;
//   color: string;
// }

export const GradientButton = styled(Button)({
  background: "linear-gradient(90deg, #2A334A, rgba(0, 0, 0, .5))",
  fontSize: "18px",
  color: "white",
  textTransform: "none",
  padding: "0 1em",
  borderRadius: "13px",
  display: "flex",
  alignItems: "stretch",
  //   WebkitBackgroundClip: "text" /* For older WebKit browsers */,
  //   backgroundClip: "text",
  //   color: "transparent",
  //   display: "inline",
});

// export const GradientButton: FC<GradientButtonProps> = ({
//   title,
//   actionName,
// }) => {
//   return (
//     <button>
//       <div>{title}</div>
//       <div>{actionName}</div>
//     </button>
//   );
// };
