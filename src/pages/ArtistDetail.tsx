import { Footer } from "../templates/Footer";
import { GoinHeader } from "../templates/GoinHeader";
import styles from "./ArtistDetail.module.css";
import data from '../data/artists.json';
import { ListArtist } from "../components/ListArtist";
// import { useSearchParams } from "react-router-dom";

export const ArtistDetail = () => {
  // const [searchParams] = useSearchParams();
  // const artistName = searchParams.get("artistName");
  const artistName = 'Rammstein';
  const artist = data.filter(a => a.name === artistName)[0];

  return (
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
  );
};