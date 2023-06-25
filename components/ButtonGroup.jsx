"use client";

import store from "@/stores/store";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineFire, AiOutlineTag } from "react-icons/ai";
import { MdOutlineNewLabel } from "react-icons/md";
import { makeCall } from "@/services/forYouApi";

const ButtonGroup = () => {
  const [firePressed, setFirePressed] = useState(false);
  const [salePressed, setSalePressed] = useState(false);
  const [newPressed, setNewPressed] = useState(false);

  const setProducts = store((state) => state.setProducts);

  // !firePressed && !salePressed && !newPressed && fetch;

  const handleClick = (type) => {
    // type === "fire" && bool
    //   ?
    // makeCall(
    //   `${
    //     type === "fire"
    //       ? "getFilteredProductsByBestseller"
    //       : type === "sale"
    //       ? "getFilteredProductsByBigDiscount"
    //       : type === "new"
    //       ? "getFilteredProductsByNew"
    //       : "getProducts"
    //   }`
    // );
    axios
      .get(
        `https://api.foryou.uz/api/${
          type === "fire"
            ? "getFilteredProductsByBestseller"
            : type === "sale"
            ? "getFilteredProductsByBigDiscount"
            : type === "new"
            ? "getFilteredProductsByNew"
            : null
        }`
      )
      .then((res) => {
        setProducts(res.data?.data);
        console.log(res.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    // : type === "sale" && bool
    // ? axios
    //     .get("https://api.foryou.uz/api/getFilteredProductsByBigDiscount")
    //     .then((res) => {
    //       setProducts(res.data?.data);
    //       console.log(res.data.data);
    //     })
    //     .catch(function (error) {
    //       // handle error
    //       console.log(error);
    //     })
    // : type === "new" && bool
    // ? axios
    //     .get("https://api.foryou.uz/api/getFilteredProductsByNew")
    //     .then((res) => {
    //       setProducts(res.data?.data);
    //       console.log(res.data.data);
    //     })
    //     .catch(function (error) {
    //       // handle error
    //       console.log(error);
    //     })
    // : axios
    //     .get("https://api.foryou.uz/api/getProducts")
    //     .then((res) => {
    //       setProducts(res.data?.data);
    //       console.log(res.data.data);
    //     })
    //     .catch(function (error) {
    //       // handle error
    //       console.log(error);
    //     });
  };

  return (
    <div className="outer flex flex-row overflow-scroll w-full">
      <div className="flex sm:flex-row gap-x-4">
        <div
          onClick={() => {
            (setSalePressed || setNewPressed) && setFirePressed(!firePressed);
            setSalePressed(false);
            setNewPressed(false);
            handleClick("fire");
          }}
          className={`flex flex-row gap-x-3 hover:cursor-pointer w-44 h-12 items-center justify-center ${
            firePressed ? "bg-violet-700" : "bg-stone-100"
          } rounded-md`}
        >
          {/* <img src="./fire.svg" className={`${firePressed ? null : "black"}`} /> */}
          <AiOutlineFire size={24} color={firePressed ? "white" : "#5900E6"} />
          <span
            className={`${
              firePressed ? "text-white" : "text-black"
            } font-semibold tracking-wide text-base`}
            style={{ userSelect: "none" }}
          >
            Хиты продаж
          </span>
        </div>
        <div
          onClick={() => {
            setSalePressed(!salePressed);
            setFirePressed(false);
            setNewPressed(false);
            handleClick("sale");
          }}
          className={`flex flex-row gap-x-3 hover:cursor-pointer w-48 h-12 items-center justify-center ${
            salePressed ? "bg-violet-700" : "bg-stone-100"
          } rounded-md`}
        >
          {/* <img src="./tag.svg" className={`${salePressed ? null : "black"}`} /> */}
          <AiOutlineTag size={24} color={salePressed ? "white" : "#5900E6"} />
          <span
            className={`${
              salePressed ? "text-white" : "text-black"
            } font-semibold tracking-wide text-base`}
            style={{ userSelect: "none" }}
          >
            Большие скидки
          </span>
        </div>
        <div
          onClick={() => {
            setNewPressed(!newPressed);
            setFirePressed(false);
            setSalePressed(false);
            handleClick("new");
          }}
          className={`flex flex-row gap-x-3 hover:cursor-pointer w-44 h-12 items-center justify-center ${
            newPressed ? "bg-violet-700" : "bg-stone-100"
          } rounded-md`}
        >
          {/* <img src="./new.svg" className={`${newPressed ? null : "black"}`} /> */}
          <MdOutlineNewLabel
            size={24}
            color={newPressed ? "white" : "#5900E6"}
          />
          <span
            className={`${
              newPressed ? "text-white" : "text-black"
            } font-semibold tracking-wide text-base`}
            style={{ userSelect: "none" }}
          >
            Самые новые
          </span>
        </div>
      </div>
    </div>
  );
};

export default ButtonGroup;
