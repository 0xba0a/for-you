"use client";

import BigSales from "@/components/BigSales";
import ButtonGroup from "@/components/ButtonGroup";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";
import { products } from "@/utils/const";
import React, { useEffect, useState } from "react";
import { AiOutlineFire } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";

const Categories = () => {
  // const [mobile, setMobile] = useState(false);
  const [order, setOrder] = useState("table");

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     if (window.screen.availWidth <= 639) setMobile(true);
  //     else setMobile(false);
  //   });
  // }, [mobile]);

  const mobile = useMediaQuery({ query: `(max-width: 639px)` });

  return (
    <div className="w-full pt-5 pl-10 pr-10 sm:pl-4 sm:pr-4 justify-between sm:mt-[72px]">
      {mobile && (
        <div className="flex flex-row gap-x-[4px] w-full">
          <BiArrowBack size={20} className="text-stone-500" />
          <div className="font-semibold text-sm text-stone-500">Главная</div>
        </div>
      )}
      <div className="flex flex-col gap-y-[32px] sm:hidden">
        <div className="flex flex-row gap-x-2 sm:hidden">
          <div className="font-semibold text-sm text-[#828282]">Главная</div>
          <div className="font-semibold text-sm">-</div>
          <div className="font-semibold text-sm">Каталог</div>
        </div>
        <div className="flex font-bold text-[32px] sm:hidden">Айти</div>
      </div>
      <div className="mt-[64px] sm:mt-[24px] flex flex-row sm:flex-col">
        <Sidebar />
        {mobile ? (
          <div className="font-bold text-xl flex items-center justify-start">
            Популярные футболки
          </div>
        ) : null}
        <div className="w-4/5 sm:w-full sm:mt-[48px]">
          {mobile && (
            <div className="flex flex-row justify-between mb-[16px]">
              <div
                onClick={() => {
                  order === "table"
                    ? setOrder("list")
                    : order === "list" && setOrder("table");
                }}
                className={`flex flex-row gap-x-2 w-[110px] h-12 items-center justify-center rounded-md`}
              >
                {order === "table" ? (
                  <img src="/list.svg" />
                ) : (
                  order === "list" && <img src="/table.svg" />
                )}
                <span
                  className="font-semibold tracking-wide text-base hover:cursor-default text-[#5900E6]"
                  style={{ userSelect: "none" }}
                >
                  {order === "table" ? "Список" : order === "list" && "Таблица"}
                </span>
              </div>
              <div
                onClick={() => {}}
                className={`flex flex-row gap-x-2 w-[110px] h-12 items-center justify-center rounded-md`}
              >
                <img src="/filter.svg" />
                <span
                  className="font-semibold tracking-wide text-base hover:cursor-default text-[#5900E6]"
                  style={{ userSelect: "none" }}
                >
                  Фильтры
                </span>
              </div>
            </div>
          )}
          <ButtonGroup />
          <div
            className={`grid grid-cols-3 mt-8 sm:mt-[24px] gap-[20px] sm:gap-x-[42px] ${
              order === "table"
                ? "sm:grid-cols-2"
                : order === "list" && "sm:grid-cols-1"
            }`}
          >
            {products.map((i) => (
              <ProductCard
                key={i.id}
                image={i.img}
                currentPrice={i.cur}
                previousPrice={i.prev}
                desc={i.desc}
                crown={i.crown}
                discount={i.sale}
                containerWidth={order === "table" && "w-[152px]"}
                containerHeight={order === "table" && "h-[272px]"}
                imgWidth={order === "table" && "w-[152px]"}
                imgHeight={order === "table" && "h-[152px]"}
                hoverImage={"/products/image 11.png"}
                order={order}
              />
            ))}
          </div>
          <button className="mt-8 mb-8 h-12 w-full bg-stone-100 font-semibold text-base flex items-center justify-center tracking-wide hover:cursor-default rounded-md">
            Смотреть все
          </button>
          <div className="mt-6 mb-11 flex items-center justify-center w-full">
            <Pagination />
          </div>
        </div>
      </div>
      <div className="mt-40 flex flex-col sm:flex-col w-full justify-between sm:mt-[120px]">
        <div className="font-bold text-4xl tracking-wide sm:text-2xl">
          Большие скидки
        </div>

        <BigSales />
      </div>
    </div>
  );
};

export default Categories;
