import { configureStore } from "@reduxjs/toolkit";
import windowSlice from "./windowSlice";

export default configureStore({
    reducer: {
        window: windowSlice,
    }
})
