import React from "react";
import Footer from "./parts/footer";
import "../assets/styles/main.scss";
import Seo from "./parts/seo";
import Header from "./parts/header";

const TemplateWrapper = ({ children, title }) => {
  return (
    <>
      <Seo title={title} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default TemplateWrapper;
