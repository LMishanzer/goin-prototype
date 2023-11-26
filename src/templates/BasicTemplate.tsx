import { FC } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type TemplateProps = { children?: React.ReactNode };

export const BasicTemplate: FC<TemplateProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};
