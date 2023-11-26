import { FeedbackForm } from "../components/FeedbackForm";
import { QrCode } from "../components/QrCode";
import { Footer } from "../templates/Footer";
import { GoinHeader } from "../templates/GoinHeader";

export const Feedback = () => {
  return (
    <div>
      <GoinHeader />
      <div
        style={{
          background: "#0C1326",
          minHeight: "95vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="content-wrapper"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FeedbackForm
            title="Send us feedback"
            subtitle="Thank you in advance for that. You can send feedback by contact form. "
            formTitle="FEEDBACK FORM"
          />
          <QrCode img="/images/QR.png" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
