import counterReducer from "./slicer/counterslic";
import { configureStore } from "@reduxjs/toolkit";
export const store=configureStore({
    reducer:{
        counter:counterReducer
    }
})