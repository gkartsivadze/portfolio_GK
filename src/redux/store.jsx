import { configureStore } from "@reduxjs/toolkit"
import loadedImagesCounterSlice from "./reducers";

export const store = configureStore({
    reducer: {
      counter: loadedImagesCounterSlice,
    },
  })