import React from "react";
import Footer from "../parts/footer";
import "../../assets/styles/main.scss";
import Seo from "../parts/seo";
import Header from "../parts/header";

const DefaultLayout = ({ children, seo }) => {
    return (
        <>
            <Seo data={seo} />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default DefaultLayout;
