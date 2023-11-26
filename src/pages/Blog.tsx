import { FC } from "react";
import { Footer } from "../templates/Footer";
import styles from "./Blog.module.css";
import { GoinHeader } from "../templates/GoinHeader";

export const PageBlog: FC = () => {
  return (
    <div>
      <GoinHeader />
      <div
        style={{
          backgroundImage: 'url("/images/blog_thumbnail.png")',
          backgroundColor: "#000",
          backgroundPosition: "center",
          width: "100%",
          height: "200px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "1500px",
            padding: "0 40px",
            height: "100%",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              color: "#fff",
              position: "absolute",
              bottom: "0",
              left: "40px",
              borderTop: "thin solid #545454",
              borderRight: "thin solid #545454",
              borderLeft: "thin solid #545454",
              padding: "15px 30px",
              borderRadius: "13px 13px 0 0",
              fontSize: "22px",
              background:
                "linear-gradient(90deg, rgba(42,51,74,1) 0%, rgba(0,0,0,.5) 67%)",
            }}
          >
            The most anticipated events of 2023
          </h1>
        </div>
      </div>
      <div className="content-wrapper">
        <p className={styles.paragraph}>
          As we move further into 2023, the world is eagerly anticipating some
          of the biggest and most exciting music events that are set to take
          place in the coming months. From festival lineups to album releases,
          there is no shortage of exciting musical happenings on the horizon. In
          this article, we’ll take a closer look at some of the most anticipated
          music events of 2023.
        </p>
        <article className={styles.paragraph}>
          <h2>Coachella 2023</h2>
          <p>
            The iconic festival that needs no introduction, Coachella is set to
            return in 2023 with a lineup that is sure to excite music lovers
            around the world. While the full lineup has yet to be announced,
            past years have seen performances from some of the biggest names in
            music, from Beyoncé and Kendrick Lamar to Radiohead and Lady Gaga.
            Whether you’re a die-hard festivalgoer or simply a fan of great
            music, Coachella is an event that simply can’t be missed.
          </p>
        </article>
        <article className={styles.paragraph}>
          <h2>Adele's new album</h2>
          <p>
            After a long hiatus, Adele is set to release a new album in 2023,
            and fans are eagerly awaiting its arrival. The British singer has
            already teased the release with the singles "Easy on Me" and "Hold
            On," both of which have been met with critical acclaim. Adele's
            powerful voice and emotional lyrics have won her millions of fans
            around the world, and her new album is sure to be one of the most
            talked-about releases of the year.
          </p>
        </article>
        <article className={styles.paragraph}>
          <h2>Glastonbury Festival 2023</h2>
          <p>
            The largest greenfield music and performing arts festival in the
            world, Glastonbury is a beloved institution that has been running
            since 1970. While the festival took a break in 2022, it's set to
            return in 2023 with a lineup that promises to be one of the most
            exciting yet. Past performers have included everyone from David
            Bowie and Oasis to Beyoncé and Kanye West, and fans are eagerly
            awaiting news of who will take to the stage in 2023.
          </p>
        </article>
        <article className={styles.paragraph}>
          <h2>Rihanna's new album</h2>
          <p>
            Another hugely anticipated album release, Rihanna's new record has
            been in the works for several years now. While details are still
            scant, the singer has teased that the album will be a departure from
            her usual sound, with a more experimental and boundary-pushing
            approach. Rihanna's loyal fanbase is eagerly awaiting the release of
            the album, which is set to be one of the most talked-about of the
            year.
          </p>
        </article>
        <article className={styles.paragraph}>
          <h2>Lollapalooza 2023</h2>
          <p>
            One of the biggest and most popular music festivals in the United
            States, Lollapalooza draws tens of thousands of fans to Chicago each
            year. The festival has yet to announce its lineup for 2023, but past
            years have seen performances from everyone from Paul McCartney and
            Metallica to Billie Eilish and Post Malone. Whether you're a fan of
            rock, hip-hop, pop, or anything in between, Lollapalooza is an event
            that has something for everyone.
          </p>
        </article>
        <p className={styles.paragraph}>
          In conclusion, 2023 is shaping up to be an exciting year for music
          lovers around the world, with a host of hugely anticipated events and
          album releases on the horizon. Whether you're a fan of festivals,
          individual artists, or just great music in general, there's sure to be
          something on this list that catches your attention. So mark your
          calendars, book your tickets, and get ready for a year of
          unforgettable musical experiences.
        </p>
      </div>
      <Footer />
    </div>
  );
};
