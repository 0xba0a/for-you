"use client";

import ProductDetails from "@/components/ProductDetails";
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";
import { useParams } from "next/navigation";
import axios from "axios";

const TShirt = () => {
  const param = useParams();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`https://api.foryou.uz/api/getProductCard/${param.id}`)
      .then((res) => {
        setData(res.data?.data);
        console.log(res.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const mobile = useMediaQuery({ query: `(max-width: 639px)` });
  return (
    <div className="flex flex-col sm:flex-col w-full pt-5 pl-10 pr-10 sm:pl-4 sm:pr-4 justify-between sm:mt-[72px]">
      <div className="flex flex-row gap-x-[10.5px] font-semibold text-sm text-stone-500 sm:hidden">
        <div>Главная</div>
        <div>-</div>
        <div>Вся одежда</div>
        <div>-</div>
        <div>Футболки</div>
        <div>-</div>
        <div>Интересные футболки</div>
        <div>-</div>
        <div className="text-black">Футболка Арт-бокс</div>
      </div>
      {mobile && (
        <div className="flex flex-row gap-x-[4px] w-full">
          <BiArrowBack size={20} className="text-stone-500" />
          <div className="font-semibold text-sm text-stone-500">
            Интересные футболки
          </div>
        </div>
      )}
      <div className="mt-[48px]">
        <ProductDetails
          name={data?.name}
          gallery={data?.foto_gallary}
          img={data?.image}
          vendor={data?.vendor_code}
          reviewsCount={data?.amount_of_reviews}
          currentPrice={data?.price}
          previousPrice={data?.old_price}
          sizes={data?.sizes}
          colors={data?.colors}
          compound={data?.compound}
          desc={data?.description}
          reviews={data?.reviews}
        />
      </div>
    </div>
  );
};

export default TShirt;
