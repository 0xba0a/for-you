"use client";

import { bigSales } from "@/utils/const";
import React from "react";
import ProductCard from "./ProductCard";
import { RightSlider } from "./Sliders";

const BigSales = () => {
  return (
    <div className="outer flex flex-col overflow-scroll w-full sm:flex-col">
      <div className="mt-9 flex flex-row gap-x-9 relative sm:mt-5 sm:gap-x-3">
        {bigSales.map((i) => (
          <ProductCard
            image={i.img}
            currentPrice={i.cur}
            previousPrice={i.prev}
            discount={i.sale}
            crown={i.crown}
            desc={i.desc}
            key={i.id}
            imgWidth="w-[152px]"
            imgHeight="h-[152px]"
            containerWidth="w-[152px]"
            containerHeight="h-[272px]"
            hoverImage={"/products/image 10-2.png"}
          />
        ))}
        <div className="absolute -right-4 top-40 sm:hidden">
          <RightSlider />
        </div>
      </div>
    </div>
  );
};

export default BigSales;
