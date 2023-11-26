import { FeedbackForm } from "../components/FeedbackForm";
import { Footer } from "../templates/Footer";
import { GoinHeader } from "../templates/GoinHeader";

export const ForPerformers = () => {
  return (
    <div>
      <GoinHeader />
      <div
        style={{
          background: "#0C1326",
          minHeight: "100vh",
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
            title="For performers"
            subtitle="We can offer you interesting conditions for cooperating as young web-platform."
            formTitle="CONTACT US"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
