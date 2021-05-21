import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.scss";
import "../styles/main.scss";
import Seo from "./Seo";

const TemplateWrapper = ({ children, title }) => {
    return (
        <>
            <Seo title={title} />
            <Navbar />
            <div>{children}</div>
            <Footer />
        </>
    );
};

export default TemplateWrapper;
