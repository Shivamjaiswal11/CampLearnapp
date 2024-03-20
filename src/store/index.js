import { configureStore } from "@reduxjs/toolkit";
import { groceryReducer } from "./grocerySlice";
import { bucketReducer } from "./bucketSlice";
import { getAllProduct } from "../services/groceryService";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer:{
        groceries:groceryReducer,
        mybuckets:bucketReducer,
        [getAllProduct.reducerPath]:getAllProduct.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getAllProduct.middleware),
    immutableCheck: false,
    serializableCheck: false,
})
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)