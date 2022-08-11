import { configureStore } from "@reduxjs/toolkit";

import basketReducer from "./features/basket/basketSlice";
import resturantReducer from "./features/resturant/resturantSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    resturant: resturantReducer,
  },
});
