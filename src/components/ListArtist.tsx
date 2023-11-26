import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link, Stack, Typography, styled } from "@mui/material";
import { FC } from "react";
import { CardArtist } from "./CardArtist";
import { Link as RouterLink } from "react-router-dom";

type Artist = { id: number; name: string; img: string };

const GradientTypography = styled(Typography)({
  background: "linear-gradient(90deg, #244067, rgba(15, 78, 166, 0.77))",
  WebkitBackgroundClip: "text" /* For older WebKit browsers */,
  backgroundClip: "text",
  color: "transparent",
  display: "inline",
});

export const ListArtist: FC<{ [key: string]: any }> = (props) => {
  const artists: Artist[] = [
    { id: 0, name: "Red Hot Chilli Peppers", img: "/images/red_hot.png" },
    { id: 1, name: "Yzomanidas", img: "/images/yzomanidas.png" },
    { id: 2, name: "Girl In Red", img: "/images/girl_in_red.png" },
    { id: 3, name: "Green Day", img: "/images/green_day.png" },
    { id: 4, name: "Arctic Monkeys", img: "/images/arctic_monkeys.png" },
  ];

  return (
    <div {...props}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "13px 0",
        }}
      >
        <h2>
          <GradientTypography fontWeight={800} fontSize={"22px"}>
            Trending Artists
          </GradientTypography>
        </h2>
        <Link
          href="#"
          underline="hover"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          View All
          <ChevronRightIcon />
        </Link>
      </div>

      <Stack
        direction="row"
        spacing={4}
        useFlexGap
        justifyContent="space-between"
      >
        {artists.map((artist) => (
          <RouterLink to={`/artist-detail/${artist.id}`} key={artist.id}>
            <CardArtist name={artist.name} img={artist.img} key={artist.id} />
          </RouterLink>
        ))}
      </Stack>
    </div>
  );
};
