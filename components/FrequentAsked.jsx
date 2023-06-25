"use client";

import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const FrequentAsked = () => {
  // const [mobile, setMobile] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     if (window.screen.availWidth <= 639) setMobile(true);
  //     else setMobile(false);
  //   });
  // }, [mobile]);
  const mobile = useMediaQuery({ query: `(max-width: 639px)` });
  return (
    <div className="pt-20 pb-20 sm:pt-16 sm:pb-16">
      <div className="flex flex-col gap-y-6 w-3/5 sm:w-full">
        <div className="font-bold text-4xl sm:text-xl sm:w-full">
          Частые вопросы
        </div>
        <div className="font-medium sm:text-sm text-base text-stone-500">
          Все , что вам нужно знать о продукте и товарах. Не можете найти ответ
          на интересующий вас вопрос? Пожалуйста{" "}
          <span className="text-violet-700 underline underline-violet-700 underline-offset-2">
            свяжитесь с нашей командой
          </span>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-2 sm:grid-cols-1 grid-row-2 gap-28 sm:gap-20">
        <div className="flex flex-col gap-y-6 w-3/4 sm:w-full">
          <div className="flex flex-row gap-x-3 items-center sm:gap-x-[12px]">
            <img
              src="/symbol-1svg.svg"
              className={`${
                mobile ? "w-[16px] h-[16px]" : "w-[24px] h-[24px]"
              }`}
              alt="symbol"
            />
            <div className="font-semibold text-2xl sm:text-base">
              Что такое «принт» ?
            </div>
          </div>
          <div className="text-base font-medium sm:text-sm text-stone-500">
            «Принт» — это рисунок, узор или надпись, напечатанные на изделиях из
            ткани или керамики
          </div>
        </div>

        <div className="flex flex-col gap-y-6 w-5/7 sm:w-full">
          <div className="flex flex-row gap-x-3 items-center sm:gap-x-[12px]">
            <img
              src="/symbol-3.svg"
              className={`${
                mobile ? "w-[16px] h-[16px]" : "w-[24px] h-[24px]"
              }`}
              alt="symbol"
            />
            <div className="font-semibold text-2xl sm:text-base">
              Что такое 3D печать?
            </div>
          </div>
          <div className="text-base font-medium sm:text-sm text-stone-500">
            Нанесение рисунка на ткань с использованием термопресса, что
            позволяет получить яркое объемное изображение, стойкое к различным
            воздействиям (стирка, глажка, повседневная носка).
          </div>
        </div>

        <div className="flex flex-col gap-y-6 w-5/7 sm:w-full">
          <div className="flex flex-row gap-x-3 items-center sm:gap-x-[12px]">
            <img
              src="/symbol-2.svg"
              className={`${
                mobile ? "w-[16px] h-[16px]" : "w-[24px] h-[24px]"
              }`}
              alt="symbol"
            />
            <div className="font-semibold text-2xl sm:text-base">
              Как выбрать размер?
            </div>
          </div>
          <div className="text-base font-medium sm:text-sm text-stone-500">
            Для этого достаточно измерить обхват груди и разделить полученное
            число на 2. Если значение при этом получилось нечетным, то его
            следует увеличить на единицу. Затем свериться с таблицей размеров.
            Можете{" "}
            <span className="text-violet-700 underline underline-violet-700 underline-offset-2">
              взглянуть на пример!
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-y-6 w-5/7 sm:w-full">
          <div className="flex flex-row gap-x-3 items-center sm:gap-x-[12px]">
            <img
              src="/symbol-4.svg"
              className={`${
                mobile ? "w-[16px] h-[16px]" : "w-[24px] h-[24px]"
              }`}
              alt="symbol"
            />
            <div className="font-semibold text-2xl sm:text-base">
              Как стирать футболку с принтом?
            </div>
          </div>
          <div className="text-base font-medium sm:text-sm text-stone-500">
            Стирать либо вручную, либо на деликатном режиме (макс. 600 оборотов
            при отжиме), вывернув футболку наизнанку.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentAsked;
