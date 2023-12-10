import { Footer } from "../templates/Footer";
import { GoinHeader } from "../templates/GoinHeader";
import {ListAllArtists} from "../components/ListAllArtists.tsx";

export const Artists = () => {

  return (
      <div style={{ background: "#09111C" }}>
        <GoinHeader />

        <ListAllArtists />

        <Footer />
      </div>
  );
};
