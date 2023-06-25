"use client";

import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const ProductCard = ({
  image,
  currentPrice,
  previousPrice,
  discount,
  desc,
  crown,
  imgWidth,
  imgHeight,
  containerWidth,
  containerHeight,
  hoverImage,
  order,
}) => {
  // const [mobile, setMobile] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     if (window.screen.availWidth <= 639) setMobile(true);
  //     else setMobile(false);
  //   });
  // }, [mobile]);

  const mobile = useMediaQuery({ query: `(max-width: 639px)` });
  return (
    <div
      className={`${
        (mobile === false || order === "list") && "w-[340px] h-[442px]"
      } sm:${containerWidth} sm:${containerHeight}`}
    >
      {/* 240 x 362 */}
      <div className="mt-3.5 mr-3.5 ml-3.5">
        <div className="relative">
          <img
            src={image}
            alt="product-img"
            // className="rounded-md w-[312px] h-[312px] sm:w-[240px] sm:h-[240px]"
            className={`rounded-md ${
              (mobile === false || order === "list") && "w-[312px] h-[312px]"
            } sm:${imgWidth} sm:${imgHeight} w-full`}
          />
          <img
            src={hoverImage}
            className={`absolute top-0 left-0 opacity-0 ${
              (mobile === false || order === "list") && "w-[312px] h-[312px]"
            } sm:${imgWidth} sm:${imgHeight} transition-opacity duration-300 transform hover:opacity-100`}
            alt="hover-img"
          />
          <img
            src="/frame.svg"
            className={`absolute top-2 left-2 ${!crown ? "hidden" : null}`}
          />
          {mobile === true && order === "table" && order !== "list" ? (
            <div
              className={`absolute bottom-2 right-2 ${
                discount === 0 && "hidden"
              }`}
            >
              <img
                src="/rect.svg"
                className={`${discount === 0 ? "hidden" : null}`}
                width="44px"
                height="20px"
              />
              <div className="absolute text-white top-0 left-2.5 font-bold text-sm">
                {discount}%
              </div>
            </div>
          ) : null}
        </div>
        <div className="mt-3.5 flex justify-between items-center">
          <div className="flex justify-between items-center gap-x-3.5 sm:flex-col sm:gap-y-0.5 ">
            <div className="font-semibold text-lg sm:text-sm">
              {currentPrice} сум
            </div>
            <div className="text-stone-500 text-sm font-semibold line-through decoration-stone-500">
              {previousPrice} сум
            </div>
          </div>
          {mobile === false || order === "list" ? (
            <div className={`relative ${discount === 0 && "hidden"}`}>
              <img
                src="/rect.svg"
                className={`${discount === 0 ? "hidden" : null}`}
              />
              <div className="absolute text-white top-0 left-4 font-bold">
                {discount}%
              </div>
            </div>
          ) : null}
        </div>
        <div className="mt-3.5 sm:mt-3 font-medium text-sm tracking-wide">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
