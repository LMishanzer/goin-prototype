import { FC } from "react";
// import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export const Footer: FC = () => {
  return (
    <section id={styles.footer}>
      <div className={styles.contentWrapper}>
        <div className={styles.links}>
          <h1>GOIN</h1>
          <div className={styles.linksContent}>
            <section className={styles.linksBlock} id="footer__customer-line">
              <h2>CUSTOMER LINE</h2>
              <ul>
                <li>+420 778 113 511</li>
                <li>support@goin.com</li>
              </ul>
            </section>
            <section className={styles.linksBlock} id="footer__other">
              <h2>OTHER</h2>
              <ul>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <Link to="/feedback">send feedback</Link>
                </li>
                <li>
                  <Link to="/for-performers">for performers</Link>
                </li>
                <li>
                  <a href="#">careers</a>
                </li>
              </ul>
            </section>
            <section className={styles.linksBlock} id="footer__policies">
              <h2>POLICIES</h2>
              <ul>
                <li>
                  <a href="#">terms and conditions</a>
                </li>
              </ul>
            </section>
          </div>
        </div>

        <section id={styles.footerSocials}>
          <ul>
            <li>
              <a href="#">
                <img src="/images/icon_instagram.svg" alt="instagram" />
              </a>
            </li>
          </ul>
        </section>

        <section id="footer__newsletter">
          <div className={styles.newsletterHeader}>
            <h2>SIGN UP TO THE NEWSLETTER</h2>
            <span>Stay up to date to the latest events</span>
          </div>
          <form action="/" method="POST">
            <div className={styles.newsletterFormContent}>
              <TextField
                fullWidth
                label="Email address"
                type="email"
                color="custom"
                focused
                InputProps={{
                  style: { color: "white" }, // Replace 'red' with your desired text color
                }}
              />
              <Button variant="contained" size="medium" color="custom">
                Subscribe
              </Button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};
