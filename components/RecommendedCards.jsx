"use client";

import React from "react";

const RecommendedCards = ({ image }) => {
  return (
    <div
      className="w-60 h-28"
      // style={{ width: "240px", height: "106px" }}
    >
      <img
        src={image}
        alt="recommended-img"
        className="rounded-md w-[240px] h-[106px] sm:w-[152px] sm:h-[68px]"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default RecommendedCards;
