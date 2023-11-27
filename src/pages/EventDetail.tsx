import data from "../data/events.json";
import {GoinHeader} from "../templates/GoinHeader.tsx";
import {Footer} from "../templates/Footer.tsx";
import {Link as RouterLink, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import styles from "./EventDetail.module.css"
import {Button, Stack} from "@mui/material";
import {ChevronRight} from "@mui/icons-material";
import {CardArtist} from "../components/CardArtist.tsx";

type Event = (typeof data)[0];

export const EventDetail = () => {
  const {eventId} = useParams();
  const [event, setArtist] = useState<Event>();

  useEffect(() => {
    const _event = data.find((e) => e.id == eventId);
    setArtist(_event);
  }, [eventId]);

  return event ? (
    <div>
      <GoinHeader/>
      <div className={styles.detailsContainer}>
        <h1 style={{
            fontSize: "40px"
          }}
        >
          {event.name}
        </h1>
        <div className={styles.infoContainer}>
          <ul>
            <li><span className={styles.infoProp}>Address:</span>Výstaviště Praha, Holešovice, Prague</li>
            <li><span className={styles.infoProp}>When:</span>{event.when}</li>
            <li><span className={styles.infoProp}>Entry:</span>CZK 600–2600</li>
          </ul>
          <ul>
            <li><span className={styles.infoProp}>Venue:</span>{event.venue}</li>
            <li><span className={styles.infoProp}>Venue's website:</span><a href="https://www.vystavistepraha.eu/">www.vystavistepraha.eu</a></li>
          </ul>
        </div>
        <Button style={{
          backgroundColor: "#0F4EA6",
          color: "#fff",
          marginTop: "80px",
          padding: "15px 10px 15px 20px",
          borderRadius: "8px",
          fontWeight: "bold"
        }}>
          Buy ticket
          <ChevronRight style={{
              marginLeft: "50px"
          }}/>
        </Button>
        <div style={{
          marginTop: "100px"
        }}>
          <h2 style={{ fontSize: "30px" }}>Performing artists</h2>
          <Stack
              direction="row"
              spacing={4}
              useFlexGap
              justifyContent="space-between"
              marginTop="40px"
          >
            {event.artists.map((artist) => (
                <RouterLink to={`/event-detail/${artist.id}`} key={artist.id}>
                  <CardArtist name={artist.name} img={artist.image} key={artist.id}/>
                </RouterLink>
            ))}
          </Stack>
        </div>
      </div>
      <Footer/>
    </div>
  ) : (
      <div>NOT FOUND</div>
  );
}