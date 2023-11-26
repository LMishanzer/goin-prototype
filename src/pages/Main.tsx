import "../App.css";
import { Footer } from "../templates/Footer";
import { Banner } from "../components/Banner";
import { GradientButton } from "../components/GradientButton";
import { ListArtist } from "../components/ListArtist";
import { ListEvent } from "../components/ListEvent";
import { Header } from "../templates/Header";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

export const PageMain = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />

      <div
        className="content-wrapper"
        style={{
          marginBottom: "100px",
        }}
      >
        <ListEvent
          title="Popular Nearby You"
          style={{
            marginTop: "50px",
          }}
        />
        <ListEvent
          title="Upcoming Nearby You"
          style={{
            marginTop: "50px",
          }}
        />
      </div>
      <Banner background="/images/blog_thumbnail.png" color="#fff">
        <GradientButton
          onClick={() => {
            navigate("/blog-page");
          }}
        >
          <div style={{ padding: "10px 80px 10px 0" }}>
            <span style={{ fontWeight: "bold" }}>BLOG: </span>
            The most anticipated events of 2023
          </div>
          <div
            style={{
              fontWeight: "500",
              borderLeft: "thin solid #373C49",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "20px",
              fontSize: "16px",
              gap: "4px",
            }}
          >
            <span>READ</span>
            <ChevronRightIcon />
          </div>
        </GradientButton>
      </Banner>
      <div
        className="content-wrapper"
        style={{
          marginBottom: "100px",
        }}
      >
        <ListArtist
          style={{
            marginTop: "50px",
          }}
        />
        {/*   <ListArtist
        key={3}
        style={{
          marginTop: "50px",
        }}
      /> */}

        {/* <App /> */}
      </div>

      <Footer />
    </div>
  );
};
