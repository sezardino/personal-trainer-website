import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.scss";
import Seo from "./Seo";

const TemplateWrapper = ({ children, title }) => {
  return (
    <div>
      <Seo title={title} />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
