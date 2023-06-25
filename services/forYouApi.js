import store from "@/stores/store";
import axios from "axios";

export const forYouApi = axios.create({
  baseURL: "https://api.foryou.uz/api",
});

// const setProducts = store((state) => state.setProducts);

export const makeCall = async (url) => {
  try {
    const { data } = await forYouApi.get(`/${url}`);
    // setProducts(data?.data);
  } catch (err) {
    console.log(err);
  }
};
