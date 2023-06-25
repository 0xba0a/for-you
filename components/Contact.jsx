"use client";

import { useEffect, useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

const Contact = () => {
  // const [mobile, setMobile] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     if (window.screen.availWidth <= 639) setMobile(true);
  //     else setMobile(false);
  //   });
  // }, [mobile]);
  const mobile = useMediaQuery({ query: `(max-width: 639px)` });
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-y-6 sm:gap-y-[24px] w-full">
        <div
          // style={{ fontSize: "40px" }}
          className="font-bold text-[40px] sm:text-xl"
        >
          Футболĸа с твоим принтом!
        </div>
        <div className="text-stone-500 font-medium text-base text-center sm:ps-16 sm:pe-16">
          Заполните форму и наши специалисты свяжутся с вами в телеграмм
        </div>
      </div>

      <div className="flex flex-row sm:flex-col justify-center mt-16 sm:mt-[64px] gap-x-7">
        <div className="flex flex-col gap-y-5 w-1/2 sm:w-full">
          <div className="border-2 rounded-md">
            <input
              className=" flex justify-center items-center h-12 ml-4 w-5/6"
              placeholder="Имя или Username в Телеграмм*"
            />
          </div>
          <div className="border-2 rounded-md">
            <input
              className="rounded-md flex justify-center items-center h-12 ml-4 w-5/6"
              placeholder="Телефон*"
            />
          </div>
          {mobile && (
            <div className="h-72 border-2 rounded-md w-full">
              <textarea
                placeholder="Добавь пожелания. Например: хочу футболĸу с приĸрепленным принтом :)"
                cols={mobile ? 30 : 65}
                rows={11}
                className="m-3"
                style={{ resize: "none" }}
              />
            </div>
          )}
          <button className="border-2 border-violet-700 rounded-md flex justify-center items-center h-12 text-violet-700 gap-x-2">
            <AiOutlineLink size={24} />
            Прикрепить файл
          </button>
          {mobile ? (
            <div className="flex flex-col justify-between gap-y-[20px]">
              <div className="flex justify-between items-center font-medium text-sm rounded-md w-full h-20 border-2">
                <div className="flex flex-row gap-x-3.5 ml-3">
                  <input type="checkbox" size="50" />
                  <div className="font-medium text-sm">I’m not a robot</div>
                </div>
                <img src="/captcha.svg" className="mr-3" />
              </div>
              <button className="flex justify-center items-center text-white font-bold text-base bg-violet-700 rounded-md w-full h-20">
                Отправить
              </button>
            </div>
          ) : (
            <div className="flex flex-row justify-between gap-x-7">
              <button className="flex justify-center items-center text-white font-bold text-base bg-violet-700 rounded-md w-1/2 h-20">
                Отправить
              </button>
              <div className="flex justify-between items-center font-medium text-sm rounded-md w-1/2 h-20 border-2">
                <div className="flex flex-row gap-x-3.5 ml-3">
                  <input type="checkbox" size="50" />
                  <div className="font-medium text-sm">I’m not a robot</div>
                </div>
                <img src="/captcha.svg" className="mr-3" />
              </div>
            </div>
          )}
        </div>
        <div className="w-1/2 h-72 border-2 rounded-md sm:hidden">
          <textarea
            placeholder="Добавь пожелания. Например: хочу футболĸу с приĸрепленным принтом :)"
            cols={65}
            rows={11}
            className="m-3"
            style={{ resize: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
