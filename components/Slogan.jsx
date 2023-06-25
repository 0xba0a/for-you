"use client";

const Slogan = () => {
  return (
    // <div className="flex flex-row w-full pt-5 pl-10 pr-10">
    <div
      className="justify-between items-center flex flex-row rounded-2xl w-7.5/12 sm:hidden"
      style={{
        // width: "886px",
        // height: "450px",
        background: "linear-gradient(105.9deg, #4A00E0 0%, #8E2DE2 100%)",
      }}
    >
      <div className="ml-20 text-white font-bold text-base flex flex-col gap-y-8 tracking-wide">
        <div style={{ fontSize: "20px" }}>@printy_na_fultbolki</div>
        <div
          style={{ width: "380px", fontSize: "40px", lineHeight: "48px" }}
          className="tracking-wide"
        >
          Подпишитесь на телеграм канал нашего магазина!
        </div>
        <div className="border-solid border-2 pt-3.5 pb-3.5 pl-10 pr-10 w-48 align-middle text-center rounded tracking-wide">
          Подписаться
        </div>
      </div>

      <div>
        <img src="/slogan-image.svg" alt="slogan-image" />
      </div>
    </div>
    // </div>
  );
};

export default Slogan;
