import React from "react";
import Footer from "../components/Footer";
// import "./all.scss";
import "../assets/styles/main.scss";
import Seo from "./Seo";
import Header from "./header";

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
