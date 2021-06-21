import React from "react";

import Hero from "../sections/hero";
import Offer from "../sections/offer";

export const ProductsPage = ({ sections }) => {
    const { hero, offer } = sections;
    return (
        <>
            <Hero data={hero} />
            <Offer data={offer} />
        </>
    );
};

export default ProductsPage;
