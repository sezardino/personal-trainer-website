import React from "react";
import Footer from "../components/Footer";
import "./all.scss";
import "../styles/main.scss";
import Seo from "./Seo";
import Header from "./header";

const TemplateWrapper = ({ children, title }) => {
  return (
    <div>
      <Seo title={title} />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
