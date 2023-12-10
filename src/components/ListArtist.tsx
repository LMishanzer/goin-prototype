import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Stack, Typography, styled } from "@mui/material";
import { FC } from "react";
import { CardArtist } from "./CardArtist";
import { Link as RouterLink } from "react-router-dom";
import data from "../data/artists.json";
import styles from "./ListArtist.module.css";

type Artist = { id: number; name: string; img: string };

const GradientTypography = styled(Typography)({
  background: "linear-gradient(90deg, #244067, rgba(15, 78, 166, 0.77))",
  WebkitBackgroundClip: "text" /* For older WebKit browsers */,
  backgroundClip: "text",
  color: "transparent",
  display: "inline",
});

export const ListArtist: FC<{ [key: string]: any }> = (props) => {
  const artists: Artist[] = data.filter(a => Number(a.id) <= 4 && Number(a.id) >= 0)
      .map(a => ({
        id: a.id,
        name: a.name,
        img: a.image,
        location: a.upcomingEvents[0].place,
        date: new Date(a.upcomingEvents[0].date)
      } as unknown as Artist));

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
        <RouterLink
          to={'/artists'}
          style={{
            display: "flex",
            alignItems: "center",
          }}
          className={styles.link}
        >
          View All
          <ChevronRightIcon />
        </RouterLink>
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
