"use client";

import * as React from "react";

const Image: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({
  src,
  ...props
}) => {
  const [loading, setLoading] = React.useState<boolean>(true);

  const handleOnload = () => {
    setLoading(false);
    console.log("Image loaded");
  };

  return (
    <>
      {loading ? <div>Loading...</div> : null}
      <img src={src} onLoad={handleOnload} {...props} />
    </>
  );
};

export default Image;
