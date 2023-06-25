"use client";

import { productDetails, users } from "@/utils/const";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";
import { TbCircleFilled } from "react-icons/tb";
import CommentCard from "./CommentCard";
import { LeftSlider, RightSlider } from "./Sliders";
import BigSales from "./BigSales";
import { useMediaQuery } from "react-responsive";

const ProductDetails = ({
  name,
  gallery,
  img,
  vendor,
  reviewsCount,
  currentPrice,
  previousPrice,
  sizes,
  colors,
  compound,
  desc,
  reviews,
}) => {
  // const numbers = [1, 2, 3, 4, 5, 6];

  // const [mobile, setMobile] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     if (window.screen.availWidth <= 639) setMobile(true);
  //     else setMobile(false);
  //   });
  // }, [mobile]);

  const mobile = useMediaQuery({ query: `(max-width: 639px)` });
  return (
    <>
      <div className="flex flex-row sm:flex-col gap-x-[40px] w-full">
        <div className="flex flex-row w-fit justify-between gap-x-[12px] items-center">
          <div className="flex flex-col gap-y-[6px] sm:hidden">
            {gallery?.map((i, index) => (
              <Image
                src={i}
                key={index}
                width={108}
                height={108}
                alt="product-img"
              />
            ))}
          </div>
          <div className="relative">
            <Image src={img} width={580} height={580} alt="product-img" />
            {mobile && (
              <>
                <BiHeart
                  size={32}
                  color="#5900E6"
                  className="absolute top-2 right-2"
                />
                <div className="mt-[12px] w-full flex items-center justify-center gap-x-[8px]">
                  {gallery?.map((i, index) => (
                    <TbCircleFilled
                      key={index}
                      size={8}
                      color={index === 0 ? "#BDBDBD" : "#ECEDEE"}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col w-2/5 sm:w-full sm:mt-[24px]">
          <div className="font-bold text-[32px] sm:text-[20px]">{name}</div>
          <div className="flex flex-row gap-x-[250px] mt-[12px] sm:flex-col sm:gap-y-[4px]">
            <div className="text-stone-500 text-base sm:text-[15px]">
              {vendor}
            </div>
            <div className="text-stone-500 text-base sm:text-[15px] underline decoration-stone-500 underline-offset-1">
              Отзывов: {reviewsCount}
            </div>
          </div>
          <div className="flex flex-col mt-[24px] gap-y-[8px] sm:hidden">
            <div className="text-[#5900E6] font-bold text-[28px]">
              {currentPrice} сум
            </div>
            <div className="text-stone-500 text-[20px] font-semibold line-through decoration-stone-500">
              {previousPrice} сум
            </div>
          </div>
          <div className="mt-[24px] flex flex-row w-full justify-between sm:pr-16">
            <div className="font-semibold text-base text-stone-500 ">
              Размер:
            </div>
            <div className="font-semibold text-base text-stone-500 underline decoration-stone-500 underline-offset-4 hover:cursor-pointer">
              Как узнать размер?
            </div>
          </div>
          <div className="grid grid-cols-4 grid-row-2 sm:grid-cols-2 sm:grid-row-3 mt-[28px] gap-5 hover:cursor-default w-fit">
            {sizes?.map((i, index) => (
              <div
                key={i.id}
                className="w-[124px] h-[38px] flex rounded-md border-2 justify-center items-center text-sm font-bold text-stone-500"
              >
                {i.name}
              </div>
            ))}
          </div>
          <div className="mt-[20px]">
            <div className="text-stone-500 font-semibold text-base">Цвет:</div>
            <div className="mt-[20px] flex flex-row gap-x-[13px]">
              {colors?.map((i) => (
                <div
                  key={i.id}
                  src={productDetails[0].img}
                  width={80}
                  height={80}
                  className={`border-2 hover:border-[#5900E6] rounded-md bg-[${i.code}]`}
                  alt="product-img"
                />
              ))}
            </div>
          </div>
          <div className="mt-[20px]">
            <span className="text-stone-500 font-semibold text-base">
              Состав:
            </span>{" "}
            <span className="font-semibold text-base">{compound}</span>
          </div>
          {mobile && (
            <div className="flex flex-sm items-center mt-[24px] gap-x-[16px] w-full">
              <div className="text-[#5900E6] font-bold text-[28px] w-2/5 sm:text-[20px]">
                {currentPrice} сум
              </div>
              <div className="text-stone-500 w-3/5 text-[20px] sm:text-base font-semibold line-through decoration-stone-500">
                {previousPrice} сум
              </div>
            </div>
          )}
          <div className="mt-[24px] flex flex-row gap-x-[28.73px] items-center sm:justify-center">
            <button className="px-[178px] sm:px-[72px] py-[16px] text-white bg-[#5900E6] rounded-md font-bold text-base">
              Добавить в корзину
            </button>
            <BiHeart size={32} color="#5900E6" className="sm:hidden" />
          </div>
        </div>
      </div>
      <div className="mt-[80px] w-2/3 sm:w-full flex flex-col gap-y-[32px]">
        <div className="font-bold text-[24px] sm:text-base">О товаре</div>
        <div className="text-[#242424] font-normal text-base sm:text-sm">
          {desc}
        </div>
      </div>
      {reviewsCount !== 0 && (
        <>
          <div className="mt-[120px] sm:mt-[50px] font-bold text-[24px]">
            Отзывы клиентов
          </div>
          <div className="mt-10 sm:mt-5 flex flex-row gap-x-5 relative sm:flex-col sm:gap-y-5">
            {reviews?.map((user, index) => (
              <CommentCard
                name={user.name}
                key={user.id}
                date={user.phone}
                comment={user.message}
                img={user.file}
                stars={user.star}
              />
            ))}
            {/* <div className="absolute top-36 -left-6 sm:hidden">
              <LeftSlider />
            </div>
            <div className="absolute top-36 -right-6 sm:hidden">
              <RightSlider />
            </div> */}
          </div>
        </>
      )}
      <div className="w-full flex sm:justify-center">
        <div className="mt-9 flex flex-row sm:flex-col sm:w-4/5 gap-x-7 sm:gap-y-2">
          <button className="font-semibold text-base text-[#5900E6] border-[#5900E6] px-[32px] py-[16px] border-2 rounded-md sm:order-2">
            Оставить отзыв
          </button>
          <button className="font-semibold text-base text-[#5900E6] px-[32px] py-[16px] rounded-md">
            Смотреть все отзывы
          </button>
        </div>
      </div>
      <div className="mt-[120px] text-[36px] font-bold sm:text-[20px] sm">
        Большие скидки
      </div>
      <BigSales />
    </>
  );
};

export default ProductDetails;
