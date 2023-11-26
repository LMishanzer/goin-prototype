import { FC, useState } from "react";
// import { Link } from "react-router-dom";
import { Button, IconButton, Snackbar, TextField } from "@mui/material";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

export const Footer: FC = () => {
  const [open, setOpen] = useState(false);

  const handleSubscribe = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

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
              <Button
                variant="contained"
                size="medium"
                color="custom"
                onClick={handleSubscribe}
              >
                Subscribe
              </Button>
            </div>
          </form>
        </section>
      </div>

      {/* Snackbar to display notification */}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Thank you for subscription!"
        action={action}
      />
    </section>
  );
};
