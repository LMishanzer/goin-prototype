import { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "./FeedbackForm.module.css";
import { Button, IconButton, Snackbar, TextField, styled } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const StyledTextField = styled(TextField)`
  & input {
    color: #fff;
  }

  & textarea {
    color: #fff;
  }

  & label {
    color: #fff;
  }

  & label.Mui-focused {
    color: #fff;
  }

  & .MuiInput-underline:after {
    border-bottom-color: #fff;
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #fff;
    }

    &:hover fieldset {
      border-color: #fff;
    }

    &.Mui-focused fieldset {
      border-color: #fff;
    }
  }
`;

interface FeedbackFormProps {
  title: string;
  subtitle: string;
  formTitle: string;
}

const emptyFormData = {
  name: "",
  email: "",
  message: "",
};

export const FeedbackForm: FC<FeedbackFormProps> = ({
  title,
  subtitle,
  formTitle,
}) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(emptyFormData);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(true);
    setFormData({ ...emptyFormData });
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
    <div className={styles.feedbackContainer}>
      <h1>{title}</h1>
      <span>{subtitle}</span>
      <div className={styles.feedbackForm}>
        <h2>{formTitle}</h2>

        <form onSubmit={handleSubmit}>
          <StyledTextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="off"
          />
          <StyledTextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="off"
          />
          <StyledTextField
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            name="message"
            multiline
            rows={8}
            value={formData.message}
            onChange={handleChange}
            autoComplete="off"
          />
          <Button
            type="submit"
            variant="contained"
            disableElevation
            color="primary"
            sx={{
              padding: "10px 40px",
              outline: "thin solid rgba(255, 255, 255, .7)",
              marginTop: "22px",
              background: "rgba(15, 78, 166, .4)",
            }}
          >
            Send
          </Button>
        </form>
      </div>

      {/* Snackbar to display notification */}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Your message was sent!"
        action={action}
      />
    </div>
  );
};
