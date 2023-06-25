"use client";

export const LeftSlider = () => {
  return (
    <div>
      <div className="rounded-full bg-white drop-shadow-md w-12 h-12 align-middle flex justify-center border-2 hover:border-purple-800 transition delay-75 duration-300 ease-in-out">
        <img
          src="/left.svg"
          alt="slider-img"
          width="24px"
          height="24px"
          className="slider"
        />
      </div>
    </div>
  );
};

export const RightSlider = () => {
  return (
    <div>
      <div className="rounded-full animate-fade bg-white drop-shadow-md w-12 h-12 align-middle flex justify-center border-2 hover:border-purple-800 transition delay-75 duration-300 ease-in-out">
        <img
          src="/right.svg"
          alt="slider-img"
          width="24px"
          height="24px"
          className="slider"
        />
      </div>
    </div>
  );
};

export default { LeftSlider, RightSlider };
