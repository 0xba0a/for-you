"use client";

const Ad = () => {
  return (
    <div className="flex flex-col">
      <div className="font-bold text-4xl sm:text-[20px] sm:pe-24 sm:leading-normal">
        Топовые принты на футболках в магазине{" "}
        <span className="text-violet-700">ForYou</span>
      </div>
      <div className="mt-5 font-medium text-base text-stone-700 sm:pe-12">
        Самый широкий выбор оригинальных футболок с принтом на любой вкус и
        возраст
      </div>
      <div className="mt-16 font-semibold text-xl sm:text-base">
        Богатый ассортимент
      </div>
      <div className="mt-4 sm:mt-8 font-medium text-base sm:text-sm text-stone-700">
        Как бы ни были неповторимы люди и разнообразны жизненные ситуации, в
        нашем интернет-магазине найдется футболка подходящая для каждого. Любой
        вариант принта может быть выполнен на мужской футболке, женской или
        детской. Мы предлагаем полный размерный ряд разнообразных моделей - от
        маек до лонгсливов...
      </div>
      <div className="mt-2 sm:mt-8 text-violet-700 font-medium text-base hover:cursor-pointer">
        Развернуть ...
      </div>
    </div>
  );
};

export default Ad;
