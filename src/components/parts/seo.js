import React from "react";
import { Helmet } from "react-helmet";
import useMeta from "../hooks/useMeta";

const Seo = (props) => {
  const data = useMeta();
  const title = props.title ? props.title | data.title : data.title;
  return (
    <Helmet>
      <html lang={data.description} />
      <title>{title}</title>
      <meta name="description" content={data.description} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={data.img.apple_touch_icon.publicURL}
      />
      <link
        rel="icon"
        type="image/png"
        href={data.img.fav_32.publicURL}
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href={data.img.fav_16.publicURL}
        sizes="16x16"
      />

      <link
        rel="mask-icon"
        href={data.img.mask_icon.publicURL}
        color="#ff4400"
      />
      <meta name="theme-color" content="#fff" />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={data.og.title} />
      <meta property="og:url" content="/" />
      <meta property="og:description" content={data.og.description} />
      <meta property="og:image" content={data.og.image.publicURL} />
    </Helmet>
  );
};

export default Seo;
