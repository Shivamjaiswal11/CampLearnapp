import { configureStore } from "@reduxjs/toolkit";
import { groceryReducer } from "./grocerySlice";
import { bucketReducer } from "./bucketSlice";

export const store = configureStore({
    reducer:{
        groceries:groceryReducer,
        mybuckets:bucketReducer
    }
})