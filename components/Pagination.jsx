"use client";

import { paginationCount } from "@/utils/const";
import { useEffect } from "react";
import { useState } from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-row gap-x-2 items-center justify-center w-full">
      <MdKeyboardDoubleArrowLeft size={24} className="text-stone-300" />
      <MdKeyboardArrowLeft size={24} className="text-stone-300" />
      {paginationCount.map((i) => (
        <div
          className={`flex hover:cursor-default items-center justify-center rounded-lg text-xl font-medium ${
            currentPage === i && currentPage !== "..."
              ? "bg-violet-700 text-white"
              : "bg-white text-black"
          }`}
          style={{ width: "40px", height: "40px" }}
          key={i}
          onClick={() => paginate(i)}
        >
          {i}
        </div>
      ))}
      <MdKeyboardArrowRight size={24} />
      <MdKeyboardDoubleArrowRight size={24} />
    </div>
  );
};

export default Pagination;
