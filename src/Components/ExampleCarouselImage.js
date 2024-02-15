import React from "react";

const ExampleCarouselImage = ({ src, text }) => {
  return (
    <div
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
        overflow: "hidden",
        marginTop: "50px",
      }}
    >
      <img
        src={src}
        alt={text}
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
    </div>
  );
};

export default ExampleCarouselImage;
