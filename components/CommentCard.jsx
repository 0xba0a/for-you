"use client";

import { paginationCount } from "@/utils/const";
import Image from "next/image";
import { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";

const CommentCard = ({ name, date, comment, img, stars }) => {
  return (
    <div className="border-2 rounded-md px-5 py-5 w-1/3 sm:w-full">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-y-[4px]">
          <div className="text-base font-semibold">{name}.</div>
          <div className="text-[#BDBDBD] font-medium text-sm">{date}</div>
        </div>
        <div className="flex flex-row gap-x-0.5">
          {new Array(stars).fill("b").map((i, index) => (
            <AiFillStar size={20} color="#FFD230" key={index} />
          ))}

          {/* <AiFillStar size={20} color="#FFD230" />
          <AiFillStar size={20} color="#FFD230" />
          <AiFillStar size={20} color="#FFD230" />
          <AiFillStar size={20} color="#FFD230" /> */}
        </div>
      </div>
      <div className="outer overflow-scroll">
        <div className="mt-[24px] w-full font-medium text-sm h-[65px]">
          {comment}
        </div>
      </div>
      <div className="outer flex flex-row overflow-scroll w-full">
        <div className="mt-[40px] gap-x-[12px] flex flex-row">
          {/* {img.map((i, index) => ( */}
          <img src={img} width={108} height={108} alt="user-img" />
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
