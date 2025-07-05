import { configureStore } from "@reduxjs/toolkit";
import { libraryApi } from "./api/libraryApi";

export const store = configureStore({
  reducer: {
    [libraryApi.reducerPath]: libraryApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
   return getDefaultMiddleware().concat(libraryApi.middleware)
  }

  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
