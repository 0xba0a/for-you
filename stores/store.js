import axios from "axios";
import { create } from "zustand";

const store = create((set) => ({
  products: [],
  currentCategory: "",
  currentClothe: "",
  setProducts: (newProducts) => set((state) => ({ products: newProducts })),
  setCurrentCategory: (newCategory) =>
    set((state) => ({ currentCategory: newCategory })),
  setCurrentClothe: (newClothe) =>
    set((state) => ({ currentClothe: newClothe })),
  fetch: axios
    .get("https://api.foryou.uz/api/getProducts")
    .then((res) => {
      set((state) => ({ products: res.data?.data }));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    }),
}));

export default store;
