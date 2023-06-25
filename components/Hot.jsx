"use client";

import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const Hot = () => {
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
      <div>
        <div
          // style={{
          //   width: "460px",
          //   height: "460px",
          // }}
          className={`${
            mobile ? "w-[320px] h-[320px]" : "w-[460px] h-[460px]"
          } flex flex-row drop-shadow-md rounded-md justify-between bg-stone-50 hover:bg-slate-200 transition delay-150 duration-300 ease-in-out`}
        >
          <div className="flex flex-col mt-10 ml-10 sm:mt-[27.83px] sm:ml-[27.83px] gap-y-10 w-44 sm:w-32 h-40">
            <div className="w-44 sm:w-32 font-bold text-2xl sm:text-xl">
              Популярные футболки
            </div>
            <button className="font-semibold text-base w-36 h-12 sm:text-sm sm:w-[109.26px] sm:h-[36.7px] flex justify-center items-center border-2 border-black rounded-md">
              Смотреть все
            </button>
          </div>
          <img
            src="/hot/img-1.png"
            // width="460px"
            // height="460px"
            alt="img"
            className={`${
              mobile ? "w-[320px] h-[320px]" : "w-[460px] h-[460px]"
            } rounded-md`}
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-5">
        <div>
          <div
            // style={{
            //   width: "460px",
            //   height: "220px",
            // }}
            className={`${
              mobile ? "w-[320px] h-[152px]" : "w-[460px] h-[220px]"
            } flex flex-row rounded-md drop-shadow-md bg-stone-50 hover:bg-slate-200 transition delay-150 duration-300 ease-in-out`}
          >
            <div className="flex flex-col mt-10 ml-10 sm:mt-[26.61px] sm:ml-[16.7px] gap-y-4 w-44 sm:w-32 align-bottom">
              <div className="w-44 sm:w-32 font-bold text-2xl sm:text-xl">
                Лучшие лонгсливы
              </div>
              <button className="font-semibold text-base w-36 h-12 sm:text-sm sm:w-[109.26px] sm:h-[36.7px] flex justify-center items-center border-2 border-black rounded-md">
                Смотреть все
              </button>
            </div>
            <img
              src="/hot/img-2.png"
              alt="img"
              className={`${
                mobile ? "w-[175.3px] h-[152px]" : "w-[252px] h-[220px]"
              }`}
            />
          </div>
        </div>

        <div>
          <div
            // style={{
            //   width: "460px",
            //   height: "220px",
            // }}
            className={`${
              mobile ? "w-[320px] h-[152px]" : "w-[460px] h-[220px]"
            } flex flex-row rounded-md drop-shadow-md bg-stone-50 hover:bg-slate-200 transition delay-150 duration-300 ease-in-out`}
          >
            <div className="flex flex-col mt-10 ml-10 sm:mt-[26.61px] sm:ml-[16.7px] gap-y-4 w-44 sm:w-32 align-bottom">
              <div className="w-44 sm:w-32 font-bold text-2xl sm:text-xl">
                Кепки и бейсболки
              </div>
              <button className="font-semibold text-base w-36 h-12 sm:text-sm sm:w-[109.26px] sm:h-[36.7px] flex justify-center items-center border-2 border-black rounded-md">
                Смотреть все
              </button>
            </div>
            <img
              src="/hot/img-3.png"
              className={`${
                mobile ? "w-[175.3px] h-[152px]" : "w-[252px] h-[220px]"
              }`}
              alt="img"
            />
          </div>
        </div>
      </div>
      <div>
        <div
          // style={{
          //   width: "460px",
          //   height: "460px",
          // }}
          className={`${
            mobile ? "w-[320px] h-[320px]" : "w-[460px] h-[460px]"
          } flex flex-row drop-shadow-md rounded-md justify-between bg-stone-50 hover:bg-slate-200 transition delay-150 duration-300 ease-in-out`}
        >
          <div className="flex flex-col mt-10 ml-10 sm:mt-[27.83px] sm:ml-[27.83px] gap-y-10 w-44 sm:w-32 h-40">
            <div className="w-44 sm:w-32 font-bold text-2xl sm:text-xl">
              Теплые свитшоты
            </div>
            <button className="font-semibold text-base w-36 h-12 sm:text-sm sm:w-[109.26px] sm:h-[36.7px] flex justify-center items-center border-2 border-black rounded-md">
              Смотреть все
            </button>
          </div>
          <img
            src="/hot/img-4.png"
            // width="460px"
            // height="460px"
            alt="img"
            className={`${
              mobile ? "w-[320px] h-[320px]" : "w-[460px] h-[460px]"
            } rounded-md`}
          />
        </div>
      </div>
    </>
  );
};

export default Hot;
