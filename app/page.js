"use client";

import Ad from "@/components/Ad";
import BigSales from "@/components/BigSales";
import ButtonGroup from "@/components/ButtonGroup";
import Contact from "@/components/Contact";
import FrequentAsked from "@/components/FrequentAsked";
import Hot from "@/components/Hot";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import RecommendedCards from "@/components/RecommendedCards";
import Sidebar from "@/components/Sidebar";
import { LeftSlider, RightSlider } from "@/components/Sliders";
import Slogan from "@/components/Slogan";
import { products, recommendedCards } from "@/utils/const";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import { useEffect, useState } from "react";
import store from "@/stores/store";
import { Grow } from "@mui/material";
import Link from "next/link";

export default function Home() {
  const mobile = useMediaQuery({ query: `(max-width: 639px)` });

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://api.foryou.uz/api/getProducts")
  //     .then((res) => {
  //       setData(res.data?.data);
  //       console.log(res.data.data);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     });
  // }, []);

  const data = store((state) => state.products);

  const fetch = store((state) => state.fetch);

  useEffect(() => {
    fetch;
  }, []);

  return (
    <>
      <div className="flex flex-row sm:flex-col w-full pt-5 pl-10 pr-10 sm:pl-4 sm:pr-4 justify-between sm:mt-[72px]">
        {mobile ? <img src="/image 45.png" /> : <Slogan />}
        <div
          style={{ width: "512px", height: "450px" }}
          className="flex align-center justify-center shadow-md relative sm:hidden"
        >
          <ProductCard
            image="/img1.png"
            currentPrice="120.000"
            previousPrice="160.000"
            discount="20"
            desc="Футболка oversize 3D унисекс Аниме Tokyo Revengers: дракон"
            hoverImage={"/products/image 10-8.png"}
          />
          <div className="absolute left-16 top-48">
            <LeftSlider />
          </div>
          <div className="absolute right-16 top-48">
            <RightSlider />
          </div>
        </div>
      </div>
      <div className="relative flex flex-row w-full pt-5 pl-10 pr-10 sm:pl-4 sm:pr-4 gap-4">
        {recommendedCards
          .slice(0, mobile ? 2 : recommendedCards.length)
          .map((i) => (
            <RecommendedCards image={i.img} key={i.id} />
          ))}
        <div className="absolute right-4 bottom-10 sm:hidden">
          <RightSlider />
        </div>
      </div>
      {mobile ? (
        <div className="flex mt-4 pl-4 pr-4 relative justify-center gap-y-6 flex-col items-center">
          <div className="font-bold text-xl">Хиты продаж</div>
          <div className="flex align-center justify-center shadow-md relative w-[512px] h-[450px] sm:w-[320px] sm:h-[414px]">
            <ProductCard
              image="/img1.png"
              currentPrice="120.000"
              previousPrice="160.000"
              discount="20"
              desc="Мужская футболка хлопок Программист кот"
              imgWidth="w-[240px]"
              imgHeight="h-[240px]"
              containerWidth="w-[240px]"
              containerHeight="h-[362px]"
            />
            <div className="absolute left-16 top-48 sm:left-5 sm:top-40">
              <LeftSlider />
            </div>
            <div className="absolute right-16 top-48 sm:right-5 sm:top-40">
              <RightSlider />
            </div>
          </div>
        </div>
      ) : null}

      <div className="flex flex-row sm:flex-col w-screen mt-20 pt-5 pl-10 pr-10 justify-between sm:pl-4 sm:pr-4">
        <Sidebar />
        {mobile ? (
          <div className="font-bold text-xl flex items-center justify-center">
            <div className="pr-10 pl-10 text-center w-[320px] h-[84px] tracking-wide">
              Футболки с принтами, одежда и другие товары на заказ
            </div>
          </div>
        ) : null}
        <div className="w-4/5 sm:w-full sm:mt-[48px]">
          <ButtonGroup />
          <div className="grid grid-cols-3 gap-[20px] mt-8 sm:mt-[24px] sm:grid-cols-2 justify-between sm:gap-x-[42px]">
            {data?.length > 0
              ? data?.map((i, index) => (
                  <Link href={`/t-shirts/${i.id}`}>
                    <ProductCard
                      key={i.id}
                      image={i.image}
                      currentPrice={i.price}
                      previousPrice={i.old_price}
                      desc={i.description}
                      crown={i.crown}
                      discount={i.discount}
                      containerWidth="w-[152px]"
                      containerHeight="h-[272px]"
                      imgWidth="w-[152px]"
                      imgHeight="h-[152px]"
                      hoverImage={i.foto_gallary[0]}
                      mobile
                    />
                  </Link>
                ))
              : "There is no product you have searched."}
          </div>
          <button className="mt-8 mb-8 h-12 w-full bg-stone-100 font-semibold text-base flex items-center justify-center tracking-wide hover:cursor-default rounded-md">
            Смотреть все
          </button>
          <div className="mt-6 mb-11 flex items-center justify-center w-full">
            <Pagination />
          </div>
        </div>
      </div>
      <div className="mt-40 flex flex-col sm:flex-col w-full pl-10 pr-10 justify-between sm:mt-[120px]">
        {
          <div className="font-bold text-4xl tracking-wide sm:text-2xl">
            Большие скидки
          </div>
        }
        <BigSales />
      </div>
      <div className="mt-32 flex flex-row sm:flex-col sm:gap-y-3 w-full pl-10 pr-10 justify-between sm:mt-[88px]">
        <Hot />
      </div>
      <div className="mt-60 w-full pl-36 pr-36 sm:pl-[20px] sm:pr-[20px] sm:mt-[120px]">
        <Contact />
      </div>
      <div className="mt-64 sm:mt-[120px] pl-36 pr-36 sm:pl-[20px] sm:pr-[20px] w-full bg-violet-100">
        <FrequentAsked />
      </div>
      <div className="mt-52 sm:mt-[200px] pl-36 pr-36 sm:pl-[20px] sm:pr-[20px] w-full">
        <Ad />
      </div>
    </>
  );
}
