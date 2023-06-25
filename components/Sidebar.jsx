"use client";

import { sizes, colors } from "@/utils/const";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { useEffect, useRef, useState } from "react";
import { BsDot } from "react-icons/bs";
import {
  Checkbox,
  CircularProgress,
  Slider,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { MdOutlineExpandMore } from "react-icons/md";
import axios from "axios";
import Link from "next/link";
import store from "@/stores/store";
import useSWR from "swr";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.foryou.uz/api/getCategories")
      .then((res) => {
        setCategories(res.data?.data);
        console.log(res.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    axios
      .get("https://api.foryou.uz/api/getTypeClothes")
      .then((res) => {
        setClothes(res.data?.data);
        console.log(res.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const [minNum, setMinNum] = useState(100000);
  const [maxNum, setMaxNum] = useState(450000);
  const minmin = 0;
  const maxmax = 1000000;
  const [priceRangeValue, setPriceRangeValue] = useState([100000, 450000]);

  const numberPrettier = (x) => {
    return x
      .toString()
      .split(/(?=(?:...)*$)/)
      .join(".");
  };

  const handlePriceRangeChange = (event, newValue) => {
    setMinNum(newValue[0]);
    setMaxNum(newValue[1]);
  };

  const handleChange = (event, newValue) => {
    setPriceRangeValue(newValue);
  };
  // const mobile = useMediaQuery({ query: `(max-width: 760px)` });

  const [currentMainCategory, setCurrentMainCategory] = useState();
  const [currentCategory, setCurrentCategory] = useState();
  const [currentClothe, setCurrentClothe] = useState();
  console.log(currentMainCategory, currentCategory, currentClothe);

  useEffect(() => {
    axios
      .get(
        `https://api.foryou.uz/api/mainFilter?${
          minNum && maxNum && `start_amount=${minNum}&end_amount=${maxNum}}`
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
  }, [minNum, maxNum]);

  const [seperateSizes, setSeperateSizes] = useState([]);
  const [checkedSizes, setCheckedSizes] = useState([]);

  const [seperateColors, setSeperateColors] = useState([]);
  const [checkedColors, setCheckedColors] = useState([]);

  useEffect(() => {
    console.log(
      `https://api.foryou.uz/api/getProducts?
        ${currentCategory && `category=${currentCategory[1]}&`}
        ${currentClothe && `type_of_clothes=${currentClothe[1]}&`}
        ${checkedSizes.length !== 0 && `size=${checkedSizes}&`}
        ${checkedColors.length !== 0 && `color=${checkedColors}`}`
    );
    axios
      .get(
        `https://api.foryou.uz/api/getProducts?
        ${currentCategory && `category=${currentCategory[1]}&`}
        ${currentClothe && `type_of_clothes=${currentClothe[1]}&`}
        ${checkedSizes.length !== 0 && `size=${checkedSizes}`}`
      )
      .then((res) => {
        setProducts(res.data?.data);
        console.log(res.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    console.log("effect");
  }, [
    currentMainCategory,
    currentCategory,
    currentClothe,
    checkedSizes,
    checkedColors,
  ]);

  const setProducts = store((state) => state.setProducts);

  const handleClick = async () => {
    // try {
    //   axios
    //     .get(
    //       `https://api.foryou.uz/api/getProducts?${
    //         currentCategory && `category=${currentCategory[1]}&`
    //       }${currentClothe && `type_of_clothes=${currentClothe[1]}&`}`
    //     )
    //     .then((res) => {
    //       setProducts(res.data?.data);
    //       console.log(res.data.data);
    //     })
    //     .catch(function (error) {
    //       // handle error
    //       console.log(error);
    //     });
    // } catch (e) {
    //   console.log(e);
    // }
  };

  // const handleClickClothes = async (id) => {
  //   try {
  //     await axios
  //       .get(
  //         `https://api.foryou.uz/api/getProducts?${
  //           currentCategory && `category=${currentCategory}&`
  //         }type_of_clothes=${id}`
  //       )
  //       .then((res) => {
  //         setProducts(res.data?.data);
  //         console.log(res.data.data);
  //       })
  //       .catch(function (error) {
  //         // handle error
  //         console.log(error);
  //       });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#5900E6",
    },
    "& input.Mui-focused": {
      color: "#5900E6",
    },
    "& .MuiInput-underline:after": {
      // borderBottomColor: "#B2BAC2",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        // borderColor: "#E0E3E7",
      },
      "&:hover fieldset": {
        borderColor: "#5900E6",
        borderWidth: "2px",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#5900E6",
      },
      "& input": {
        fontSize: "15px",
        color: "#242424",
        fontWeight: 600,
      },
    },
  });

  const Accordion1 = styled((props) => (
    <MuiAccordion disableGutters elevation={0} {...props} />
  ))(({ theme }) => ({
    // border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary1 = styled((props) => (
    <MuiAccordionSummary {...props} />
  ))(({ theme }) => ({
    // backgroundColor:
    //   theme.palette.mode === "dark"
    //     ? "rgba(255, 255, 255, .05)"
    //     : "rgba(0, 0, 0, .03)",
    // flexDirection: "row-reverse",
    // "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    //   transform: "rotate(90deg)",
    // },
    // "& .MuiAccordionSummary-content": {
    //   marginLeft: theme.spacing(1),
    // },
  }));

  const AccordionDetails1 = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    // borderTop: "0px solid rgba(0, 0, 0, .125)",
  }));
  return (
    // <div className="flex flex-row w-full pt-5 pl-10 pr-10 justify-between">
    <div className="w-1/5 sm:hidden">
      <Link href="/categories/123">
        <div
          style={{ fontSize: "40px" }}
          className="font-bold hover:cursor-default h-12 w-full flex items-center"
        >
          Каталог
        </div>
      </Link>
      <div className="mt-8 flex flex-col gap-y-[8px]">
        {categories?.map((i) => (
          <Accordion1
            // expanded={
            //   currentMainCategory &&
            //   (currentMainCategory[0] === i.id ? true : false)
            // }
            className="flex flex-col justify-start"
            key={i.id}
          >
            {/* <div className="flex flex-col justify-start gap-y-[8px]"> */}
            {/* <div className="flex flex-row"> */}
            <AccordionSummary1
              aria-controls="panel1a-content"
              className={`text-base font-semibold ${
                currentMainCategory && currentMainCategory[0] === i.id
                  ? "text-[#5900E6]"
                  : "text-[#4F4F4F]"
              } hover:text-[#5900E6] hover:cursor-default p-0`}
              // onClick={() => {
              //   setCurrentMainCategory([i.name, i.id]);
              // }}
            >
              {i.name}

              <div className="ml-3 text-xs font-semibold text-stone-400 tracking-wide">
                {i.number}
              </div>
            </AccordionSummary1>
            {/* </div> */}
            <AccordionDetails1 className="flex flex-col gap-y-[24px]">
              {i.sub_categories?.map((e) => (
                <div
                  onClick={() => {
                    // handleClick();
                    setCurrentCategory([e.name, e.id]);
                    setCurrentMainCategory([e.parent_id]);
                  }}
                  key={e.id}
                  className={`flex flex-row gap-x-[8px] text-base font-semibold ${
                    currentCategory && currentCategory[0] === e.name
                      ? "text-[#5900E6]"
                      : "text-[#4F4F4F]"
                  } hover:text-violet-700 hover:cursor-pointer items-center pl-[8px]`}
                >
                  <BsDot /> {e.name}
                </div>
              ))}
            </AccordionDetails1>
            {/* </div> */}
          </Accordion1>
        ))}
        <div className="flex flex-col gap-y-[16px]">
          <div className="mt-[40px] font-bold text-[24px]">Фильтры</div>
          <div className="flex flex-col gap-y-[16px] text-[#242424] font-semibold text-base hover:cursor-pointer">
            {clothes?.map((i, index) => {
              return (
                <div
                  className={`hover:text-[#5900E6] ${
                    currentClothe && currentClothe[1] === i.id
                      ? "text-[#5900E6]"
                      : null
                  }`}
                  key={i.id}
                  onClick={() => {
                    setCurrentClothe([i.name, i.id]);
                    // handleClick();
                  }}
                >
                  {i.name}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col mt-[15px] px-0 w-11/12">
            <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={<MdOutlineExpandMore size={24} />}
                aria-controls="panel1a-content"
                className="p-0"
              >
                <div className="font-bold text-base">Цена</div>
              </AccordionSummary>
              <AccordionDetails className="flex flex-col gap-y-[12px] pl-2.5 pr-2.5">
                <Slider
                  // aria-label="price"
                  value={priceRangeValue}
                  onChangeCommitted={handlePriceRangeChange}
                  onChange={handleChange}
                  step={1000}
                  min={minmin}
                  max={maxmax}
                  sx={{
                    color: "rgba(89, 0, 230, 0.3)",
                    "& .MuiSlider-track": {
                      border: "none",
                      backgroundColor: "rgba(89, 0, 230)",
                    },
                    "& .MuiSlider-thumb": {
                      width: 20,
                      height: 20,
                      backgroundColor: "rgba(89, 0, 230)",
                      "&:before": {
                        // boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                      },
                      "&:hover, &.Mui-focusVisible, &.Mui-active": {
                        boxShadow: "none",
                      },
                    },
                  }}
                />
                <div className="flex flex-row gap-x-[12px]">
                  <CssTextField
                    id="outlined-basic"
                    label="От"
                    variant="outlined"
                    size="small"
                    value={numberPrettier(minNum) + " сум"}
                    onChange={(e) => {
                      setMinNum(Number(e.target.value));
                      setPriceRangeValue([
                        Number(e.target.value),
                        priceRangeValue[1],
                      ]);
                    }}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <CssTextField
                    id="outlined-basic"
                    label="До"
                    variant="outlined"
                    size="small"
                    value={numberPrettier(maxNum) + " сум"}
                    onChange={(e) => {
                      setMaxNum(Number(e.target.value));
                      setPriceRangeValue([
                        priceRangeValue[0],
                        Number(e.target.value),
                      ]);
                    }}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="flex flex-col px-0 mt-[15px] w-11/12">
            <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={<MdOutlineExpandMore size={24} />}
                aria-controls="panel1a-content"
                className="p-0"
              >
                <div className="font-bold text-base">Размеры</div>
              </AccordionSummary>
              <AccordionDetails className="flex flex-col gap-y-[16px] pl-0">
                <div className="flex flex-row gap-x-[12px] items-center">
                  <Checkbox
                    sx={{
                      "&:hover": { bgcolor: "transparent" },
                    }}
                    disableRipple
                    color="default"
                    checkedIcon={<img src="/check.svg" />}
                    icon={<img src="/unchecked.svg" />}
                    inputProps={{ "aria-label": "Все размеры" }}
                    onChange={(e) =>
                      e.target.checked
                        ? setCheckedSizes([1, 2, 3, 4, 5])
                        : setCheckedSizes(seperateSizes)
                    }
                  />
                  <div className="font-medium text-base text-[#242424]">
                    Все размеры
                  </div>
                </div>
                {sizes.map((size) => (
                  <div
                    key={size.index}
                    className="flex flex-row gap-x-[12px] items-center"
                  >
                    <Checkbox
                      sx={{
                        "&:hover": { bgcolor: "transparent" },
                      }}
                      disableRipple
                      color="default"
                      checkedIcon={<img src="/check.svg" />}
                      icon={<img src="/unchecked.svg" />}
                      inputProps={{ "aria-label": { size } }}
                      onChange={(e) => {
                        setCheckedSizes((prev) =>
                          e.target.checked
                            ? [...prev, size.id]
                            : [...prev.filter((i) => i !== size.id)]
                        );
                        setSeperateSizes((prev) =>
                          e.target.checked
                            ? [...prev, size.id]
                            : [...prev.filter((i) => i !== size.id)]
                        );
                      }}
                    />
                    <div className="font-medium text-base text-[#242424]">
                      {size.size}
                    </div>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="flex flex-col px-0 mt-[15px] w-11/12">
            <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={<MdOutlineExpandMore size={24} />}
                aria-controls="panel1a-content"
                className="p-0"
              >
                <div className="font-bold text-base">Цвет</div>
              </AccordionSummary>
              <AccordionDetails className="flex flex-col gap-y-[16px] pl-0">
                <div className="flex flex-row gap-x-[12px] items-center">
                  <Checkbox
                    sx={{
                      "&:hover": { bgcolor: "transparent" },
                    }}
                    disableRipple
                    color="default"
                    checkedIcon={<img src="/check.svg" />}
                    icon={<img src="/unchecked.svg" />}
                    inputProps={{ "aria-label": "Все цвета" }}
                    onChange={(e) =>
                      e.target.checked
                        ? setCheckedColors([1, 2, 3])
                        : setCheckedColors(seperateColors)
                    }
                  />
                  <div className="font-medium text-base text-[#242424]">
                    Все цвета
                  </div>
                </div>
                {colors.map((color) => (
                  <div
                    key={color.id}
                    className="flex flex-row gap-x-[12px] items-center"
                  >
                    <Checkbox
                      sx={{
                        "&:hover": { bgcolor: "transparent" },
                      }}
                      disableRipple
                      color="default"
                      checkedIcon={<img src="/check.svg" />}
                      icon={<img src="/unchecked.svg" />}
                      inputProps={{ "aria-label": { color } }}
                      onChange={(e) => {
                        setCheckedColors((prev) =>
                          e.target.checked
                            ? [...prev, color.id]
                            : [...prev.filter((i) => i !== color.id)]
                        );
                        setSeperateColors((prev) =>
                          e.target.checked
                            ? [...prev, color.id]
                            : [...prev.filter((i) => i !== color.id)]
                        );
                      }}
                    />
                    <div className="font-medium text-base text-[#242424]">
                      {color.color}
                    </div>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Sidebar;
