"use client";

import { useEffect, useState } from "react";
import { BsFacebook, BsInstagram, BsTelegram } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  // const [mobile, setMobile] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     if (window.screen.availWidth <= 639) setMobile(true);
  //     else setMobile(false);
  //   });
  // }, [mobile]);
  const mobile = useMediaQuery({ query: `(max-width: 639px)` });
  return (
    <div className="text-white mt-60 sm:mt-[200px] pb-32 pt-32 pl-36 pr-36 sm:pt-[80px] sm:pb-[80px] sm:pl-[20px] sm:pr-[20px] w-full bg-stone-900">
      <div className="flex flex-row sm:flex-col justify-between">
        <div className="flex flex-col w-1/3 gap-y-6 sm:w-full">
          <img src="/logo2.svg" width={150} height={40} />
          <div className="font-semibold text-sm">
            ForYou - это печать максимально широкого спектра продукции — 24
            часа, 7 дней в неделю, удобно, быстро, компетентно и качественно!
          </div>
          <div className="flex flex-row gap-x-5">
            <BsInstagram size={26} />
            <BsTelegram size={26} />
            <BsFacebook size={26} />
          </div>
          <div className="mt-40 flex flex-row gap-x-10 sm:hidden">
            <div className="font-semibold text-sm text-stone-400">
              2023 © foryou.uz
            </div>
            <div className="font-semibold text-sm text-stone-400">
              Карта сайта
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-x-32 sm:mt-[80px]">
          <div className="flex flex-col gap-y-4">
            <div className="font-bold text-stone-400 text-sm">
              Основные разделы
            </div>
            <div className="font-semibold text-base">Футболки</div>
            <div className="font-semibold text-base">Лонгсливы</div>
            <div className="font-semibold text-base">Свитшоты</div>
            <div className="font-semibold text-base">Худи</div>
            <div className="font-semibold text-base">Кепки</div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-y-4">
              <div className="font-bold text-stone-400 text-sm">
                Помощь покупателю
              </div>
              <div className="font-semibold text-base">Как сделать заказ?</div>
              <div className="font-semibold text-base">Доставка</div>
              <div className="font-semibold text-base">О компании</div>
              <div className="font-semibold text-base">Отзывы</div>
            </div>
            <div className="mt-44 flex justify-start items-center sm:hidden">
              <div className="text-base font-semibold">Разработка -&nbsp;</div>
              <img
                src="/inweb.svg"
                width={15}
                height={18}
                style={{ display: "inline-block" }}
              />
            </div>
          </div>
        </div>
      </div>
      {mobile && (
        <div className="flex flex-col gap-y-[24px] pb-[80px]">
          <div className="mt-[80px]">
            <div className="flex flex-row gap-x-10">
              <div className="font-semibold text-sm text-stone-400">
                2023 © foryou.uz
              </div>
              <div className="font-semibold text-sm text-stone-400">
                Карта сайта
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center">
            <div className="text-base font-semibold">Разработка -&nbsp;</div>
            <img
              src="/inweb.svg"
              width={15}
              height={18}
              style={{ display: "inline-block" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
