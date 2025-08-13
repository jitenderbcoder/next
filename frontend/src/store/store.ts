import { GenericApi } from "../api/genricApi";
import authSlice from "./slice/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [GenericApi.reducerPath]: GenericApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(GenericApi.middleware),
  devTools: true,
});

export type StoreModel = ReturnType<typeof store.getState>;

setupListeners(store.dispatch);

export default store;
