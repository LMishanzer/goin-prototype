import { Footer } from "../templates/Footer";
import { GoinHeader } from "../templates/GoinHeader";
import styles from "./ArtistDetail.module.css";
import data from "../data/artists.json";
import { ListArtist } from "../components/ListArtist";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type Artist = (typeof data)[0];

export const ArtistDetail = () => {
  const { artistId } = useParams();
  const [artist, setArtist] = useState<Artist>();

  useEffect(() => {
    const _artist = data.find((a) => a.id == artistId);
    setArtist(_artist);
  }, [artistId]);

  return artist ? (
    <div>
      <GoinHeader />
      <div className={styles.detailsContainer}>
        <div className={styles.details}>
          <h2 className={styles.header}>{artist.name}</h2>
          <div className={styles.mainContent}>
            <p className={styles.info}>{artist.info}</p>
            <img className={styles.image} src={artist.image} />
          </div>
        </div>
        <div className={styles.additional}>
          <ListArtist />
          <div className={styles.eventList}>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <div>NOT FOUND</div>
  );
};
