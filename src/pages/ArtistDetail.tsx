import { Footer } from "../templates/Footer";
import { GoinHeader } from "../templates/GoinHeader";
import styles from "./ArtistDetail.module.css";
import data from "../data/artists.json";
import { Link as RouterLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardArtist } from "../components/CardArtist.tsx";
import { Link, Stack } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

type Artist = (typeof data)[0];

export const ArtistDetail = () => {
  const { artistId } = useParams();
  const [artist, setArtist] = useState<Artist>();

  useEffect(() => {
    const _artist = data.find((a) => a.id == artistId);
    setArtist(_artist);
  }, [artistId]);

  return artist ? (
    <div style={{ background: "#09111C" }}>
      <GoinHeader />
      <div className={styles.detailsContainer + " content-wrapper"}>
        <div className={styles.details}>
          <h1 className={styles.header}>{artist.name}</h1>
          <div className={styles.mainContent}>
            <p className={styles.info}>{artist.info}</p>
            <img
              className={styles.image}
              src={artist.image}
              alt="artist photo"
            />
          </div>
        </div>
        <div className={styles.additional}>
          <div className={styles.relatedArtists}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h2 className={styles.relatedLabel}>Related Artists</h2>
              <Link
                href="#"
                underline="hover"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#fff",
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
              {artist.relatedArtists.map((artist) => (
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
          <div className={styles.eventList}>
            <h2 className={styles.relatedLabel}>Upcoming Events</h2>

            <Stack
              direction="column"
              spacing={4}
              useFlexGap
              justifyContent="space-between"
            >
              {artist.upcomingEvents.map((event) => (
                <RouterLink
                  style={{ textDecoration: "none" }}
                  to={`/event-detail/${event.link_id}`}
                  key={event.id}
                >
                  <div>
                    <div className={styles.eventCard}>
                      <span>{event.place}</span>
                      <span className={styles.chevron}>
                        <ChevronRightIcon />
                      </span>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#0F4EA6",
                        width: "100px",
                        height: "30px",
                        position: "relative",
                        top: "-20px",
                        left: "15px",
                        borderRadius: "15px",
                        textDecoration: "none",
                        color: "#fff",
                      }}
                    >
                      <div
                        style={{
                          width: "100px",
                          lineHeight: "30px",
                          textAlign: "center",
                        }}
                      >
                        {event.date}
                      </div>
                    </div>
                  </div>
                </RouterLink>
              ))}
            </Stack>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <div>NOT FOUND</div>
  );
};
