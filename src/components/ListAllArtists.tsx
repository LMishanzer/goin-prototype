import {FC} from "react";
import {Stack} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import data from "../data/artists.json";
import {CardEvent} from "./CardEvent.tsx";

type Artist = { id: number; name: string; img: string, location: string, date: Date, eventId: string };

export const ListAllArtists: FC<{ [key: string]: any }> = () => {
  const artists: Artist[] = data
      .map(a => ({
        id: a.id,
        name: a.name,
        img: a.image,
        location: a.upcomingEvents[0].place,
        date: new Date(a.upcomingEvents[0].date),
        eventId: a.upcomingEvents[0].id
      } as unknown as Artist)).sort(function(a,b) {
          // @ts-ignore
          return a.date - b.date;
        }
      );

  return (
      <div style={{
        padding: "50px 120px"
      }}>
        <Stack
            direction="row"
            spacing={4}
            useFlexGap
            justifyContent="flex-start" // Change justifyContent to "flex-start"
            flexWrap="wrap"
        >
          {artists.map((artist) => (
              <RouterLink to={`/event-detail/${artist.eventId}`} key={artist.id}>
                <CardEvent
                    name={artist.name}
                    img={artist.img}
                    key={artist.id}
                    location={artist.location}
                    date={artist.date}
                />
              </RouterLink>
          ))}
        </Stack>
      </div>
  );
};
