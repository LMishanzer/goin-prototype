import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { Footer } from "../templates/Footer";
import { SearchHeader } from "../templates/SearchHeader";
import { Stack } from "@mui/material";
import { CardArtist } from "../components/CardArtist";
import { Link as RouterLink } from "react-router-dom";
import artists from "../data/artists.json";
import { CardEvent } from "../components/CardEvent";

type Artist = (typeof artists)[0];

export const PageSearch: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  const foundArtists: Artist[] = artists.filter((a) =>
    a.name.toLocaleLowerCase().includes(query.toLowerCase())
  );

  const foundEvents = foundArtists.flatMap((a) =>
    a.upcomingEvents.map((e) => ({
      img: a.image,
      name: a.name,
      eventDetail: { ...e, date: new Date(Date.parse(e.date)) },
    }))
  );

  return (
    <div
      style={{
        background: "#0C1326",
      }}
    >
      <SearchHeader />
      <div
        style={{ minHeight: "100vh", padding: "40px" }}
        className={"content-wrapper"}
      >
        <div style={{ marginBottom: "40px" }}>
          <h2
            style={{
              color: "#fff",
              fontSize: "24px",
              fontWeight: 600,
              paddingBottom: "30px",
            }}
          >
            Artists
          </h2>
          <Stack direction="row" spacing={5} useFlexGap flexWrap="wrap">
            {foundArtists.map((artist) => (
              <RouterLink to={`/artist-detail/${artist.id}`} key={artist.id}>
                <CardArtist
                  name={artist.name}
                  img={artist.image}
                  key={artist.id}
                />
              </RouterLink>
            ))}
          </Stack>
        </div>

        <div style={{ margin: "40px 0" }}>
          <h2
            style={{
              color: "#fff",
              fontSize: "24px",
              fontWeight: 600,
              paddingBottom: "30px",
            }}
          >
            Events
          </h2>
          <Stack direction="row" spacing={5} useFlexGap flexWrap="wrap">
            {foundEvents.map((event) => (
              <RouterLink
                to={`/event-detail/${event.eventDetail.id}`}
                key={event.eventDetail.id}
              >
                <CardEvent
                  name={event.name}
                  img={event.img}
                  location={event.eventDetail.place}
                  date={event.eventDetail.date}
                />
              </RouterLink>
            ))}
          </Stack>
        </div>
      </div>
      <Footer />
    </div>
  );
};
