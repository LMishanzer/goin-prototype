import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { ListArtist } from "../components/ListArtist";
import { Footer } from "../templates/Footer";
import { GoinHeader } from "../templates/GoinHeader";
import { SearchHeader } from "../templates/SearchHeader";

export const PageSearch: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query");

  return (
    <div
      style={{
        background: "#0C1326",
      }}
    >
      <SearchHeader />
      <div className={"content-wrapper"}>
        <div>
          <ListArtist />
        </div>
      </div>
      <Footer />
    </div>
  );
};
