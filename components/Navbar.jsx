"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  BiCart,
  BiHeart,
  BiHomeAlt,
  BiMenu,
  BiSearch,
  BiUser,
} from "react-icons/bi";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // const [mobile, setMobile] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     if (window.screen.availWidth <= "639") setMobile(true);
  //     else setMobile(false);
  //   });
  // }, [mobile]);

  const mobile = useMediaQuery({ query: `(max-width: 639px)` });

  return (
    <>
      <div className="flex flex-row w-full items-center mb-6 pb-3 pt-7 pl-10 pr-10 justify-between sm:hidden">
        <Image
          src="/logo.svg"
          width={165}
          height={44}
          alt="for-you-logo"
          className="inline-block"
        />

        {/* Desktop & Mobile Navigation */}
        <div className="flex flex-row font-bold text-base w-2/7 gap-9 tracking-wide hover:cursor-pointer">
          <div>Футболки</div>
          <div>Лонгслив</div>
          <div>Свитшоты</div>
          <div>Худи</div>
          <div>Кепки</div>
        </div>

        <div className="flex flex-row font-medium text-base text-stone-500 gap-1.5 -z-50">
          <img src="/telegramsvg.svg" width={14} height={14} />
          <p className="underline decoration-dashed underline-offset-4">
            Написать в телеграм
          </p>
        </div>

        {/* menu icons */}
        <div className="flex flex-row gap-9">
          <div className="relative z-50">
            {/* <img
              src="./search.svg"
              className={`${open ? "purple" : null} mr-3 z-10`}
              width={24}
              height={24}
              onClick={() => {
                setOpen(!open);
              }}
            /> */}
            <BiSearch
              className={`${open ? "text-violet-700" : null} mr-3 z-10`}
              size={24}
              onClick={() => {
                setOpen(!open);
              }}
            />

            {/* <Transition
            show={open}
            enter="transition-all ease-in duration-300"
            enterFrom="opacity-0 translate-x-80"
            enterTo="opacity-100 -translate-x-0"
            leave="transition-all ease-out duration-100"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-80"
          > */}
            <div
              className={`absolute flex w-80 h-12 -top-2.5 -z-50 right-0 bg-white text-start align-middle border-2 border-stone-200 rounded-md ${
                open ? null : "opacity-0"
              }`}
            >
              <input
                className="font-medium text-base tracking-wide text-stone-300 ml-3"
                placeholder="Например, человек паук"
                type="search"
                style={{ border: "none" }}
              />
            </div>
            {/* </Transition> */}
          </div>
          {/* <img src="./user.svg" width={24} height={24} /> */}
          <BiUser size={24} />
          {/* <img src="./heart.svg" width={24} height={24} /> */}
          <BiHeart size={24} />
          <div className="relative">
            {/* <img
              src="./shopping-cart.svg"
              width={24}
              height={24}
              onClick={() => {
                setOpen(!open);
              }}
            /> */}
            <BiCart size={24} />
            <div
              style={{ backgroundColor: "#5900E6" }}
              className="absolute bottom-4 left-4 rounded-full text-white w-5 h-5 font-semibold text-sm flex justify-center items-center leading-4 pr-0.5 pt-0.5"
            >
              1
            </div>
          </div>
        </div>

        <div className="font-semibold text-base text-stone-500">RU</div>
      </div>
      {/* Mobile Navigation */}
      {mobile && (
        <>
          <div
            className="top-0 w-screen flex items-center justify-center fixed bg-white h-[72px]"
            style={{ zIndex: 9999 }}
          >
            <div className="pr-8 pl-8 flex flex-row justify-between w-full h-full items-center">
              <BiMenu color="#5900E6" size={24} />
              <img src="/logo.svg" width={105} height={48} />
              <BiUser size={24} />
            </div>
          </div>
          <div
            className="bottom-0 w-screen flex items-center justify-center fixed bg-white h-[72px]"
            style={{ zIndex: 9999 }}
          >
            <div className="flex pl-4 pr-4 flex-row w-full h-full items-center justify-between">
              <div className="flex flex-col gap-y-1 justify-center items-center">
                <BiHomeAlt size={24} color="#5900E6" />
                <span className="text-sm text-semibold text-black">
                  Главная
                </span>
              </div>
              <div className="flex flex-col gap-y-1 justify-center items-center">
                <BiSearch size={24} />
                <span className="text-sm text-semibold text-stone-500">
                  Поиск
                </span>
              </div>
              <div className="flex flex-col gap-y-1 justify-center items-center">
                <BiHeart size={24} />
                <span className="text-sm text-semibold text-stone-500">
                  Избранное
                </span>
              </div>
              <div className="flex flex-col gap-y-1 justify-center items-center">
                <div className="relative">
                  <BiCart size={24} />
                  <div
                    style={{ backgroundColor: "#5900E6" }}
                    className="absolute bottom-3.5 left-3.5 rounded-full text-white w-5 h-5 font-semibold text-sm flex items-center justify-center leading-4 pr-0.5 pt-0.5"
                  >
                    1
                  </div>
                </div>
                <span className="text-sm text-semibold text-stone-500">
                  Корзина
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
